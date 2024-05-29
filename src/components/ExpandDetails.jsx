import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	ChakraProvider,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
} from "@chakra-ui/react";

const ExpandDetails = ({ element }) => {
	const [total, setTotal] = useState(element.category.length);
	useEffect(() => {
		for (let i = 0; i < element.category.length; i++) {
			setTotal((prev) => prev + element.category[i].items.length);
		}
	}, []);
	return (
		<ChakraProvider>
			<DIV>
				<Accordion allowToggle>
					<AccordionItem>
						<h2>
							<AccordionButton backgroundColor={"#d2d0d0"}>
								<Box color={"#ec5642"} as="span" flex="1" textAlign="left">
									{element.displayName}{" "}
									<span
										style={{
											borderRadius: "50%",
											backgroundColor: "#ec5642",
											color: "white",
											padding: ".4rem .7rem",
										}}
									>
										{total}
									</span>
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>
							{element.category.map((item, index) => {
								// setTotal(prev=>prev*item.items.length)
								return (
									<div key={index} style={{ display: "flex" }}>
										<TableContainer>
											<Table variant="simple">
												<Thead>
													<Tr>
														<Th>{item.displayName}</Th>
													</Tr>
												</Thead>
												<Tbody>
													{item.items.map((ele, ind) => (
														<Tr key={ind}>
															<Td>
																<p>{ele.displayName}</p>
																<p style={{ fontWeight: "bolder" }}>
																	{ele.typeOptions}
																</p>
															</Td>
															<Td>
																<p style={{ fontWeight: "bolder" }}>
																	{ele.type.length}
																</p>
															</Td>
														</Tr>
													))}
												</Tbody>
											</Table>
										</TableContainer>
									</div>
								);
							})}
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</DIV>
		</ChakraProvider>
	);
};

export default ExpandDetails;

const DIV = styled.div`
	/* .chakra-accordion__item,
	.chakra-accordion__button,
	.chakra-collapse {
		width: 90%;
	} */
	.chakra-accordion__panel {
		/* width: 80%; */
		display: flex;

		/* display: grid;
        grid-template-columns: auto ; */
		overflow: auto;
	}
`;
