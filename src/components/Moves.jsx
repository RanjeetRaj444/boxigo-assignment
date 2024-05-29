import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";
import { DIV } from "../styled-components/move";
import { MdHome, MdDateRange } from "react-icons/md";
import { GiVillage, GiPathDistance } from "react-icons/gi";
import { GrEdit } from "react-icons/gr";
import ExpandDetails from "./ExpandDetails";
const Moves = ({ ele }) => {
	const [movingto, setMovingTO] = useState("");
	const [movingFrom, setMovingFrom] = useState("");
	const [show, setShow] = useState(true);
	// console.log(movingto);
	function handleExpand() {
		if (show === false) {
			setShow(true);
		} else {
			setShow(false);
		}
	}
	useEffect(() => {
		setMovingTO(
			`${ele.moving_to.split(",")[ele.moving_to.split(",").length - 3]},${
				ele.moving_to.split(",")[ele.moving_to.split(",").length - 2]
			},${ele.moving_to.split(",")[ele.moving_to.split(",").length - 1]}`,
		);
		setMovingFrom(
			`${ele.moving_from.split(",")[ele.moving_from.split(",").length - 3]},${
				ele.moving_from.split(",")[ele.moving_from.split(",").length - 2]
			},${ele.moving_from.split(",")[ele.moving_from.split(",").length - 1]}`,
		);
	}, []);
	return (
		<DIV>
			<div className="top-section">
				<div className="top-child">
					<p
						style={{
							width: !show ? "50%" : "100%",
							textAlign: "left",
						}}
						className="heading-moves"
					>
						From
					</p>
					<p className={!show ? "moving-from expand" : "moving-from"}>
						{!show ? ele.moving_from : movingFrom}
					</p>
				</div>
				<div className="top-child">
					<div>
						<FaArrowRight />
					</div>
				</div>
				<div className="top-child">
					<p className="heading-moves">To</p>
					<p className={!show ? "moving-from expand" : "moving-from"}>
						{!show ? ele.moving_to : movingto}
					</p>
				</div>
				<div className="top-child">
					<p className="heading-moves">Request#</p>
					<p className="moves-code">{ele.estimate_id}</p>
				</div>
			</div>
			<div className="middle-section">
				<div>
					<h2>
						<MdHome />
					</h2>
					<h3>{ele.property_size}</h3>
				</div>
				<div>
					<h2>
						<GiVillage />
					</h2>
					<h3>{ele.total_items}</h3>
				</div>
				<div>
					<h2>
						<GiPathDistance />
					</h2>
					<h3>{ele.distance}</h3>
				</div>
				<div>
					<h2>
						<MdDateRange />
					</h2>
					<h3>
						{ele.moving_on} <GrEdit />
					</h3>
				</div>
				<div>
					<label className="cl-checkbox">
						<input type="checkbox" />
						<span></span>
					</label>
					<h3>Is flexible</h3>
				</div>
				<div className="mid-btn-container">
					<button onClick={handleExpand} className="view-more">
						View {!show ? "less" : "more"} details
					</button>

					<button className="Quotes">Quotes Awating</button>
				</div>
			</div>
			<div className="bottom-section">
				<div className="warn-sign">
					<IoIosWarning />
				</div>
				<p>
					<span>Disclaimer:</span> Please update your move date before two days
					of shifting.
				</p>
			</div>
			<div
				className={
					show
						? "expand-details animatedFadeInUp fadeInUp animated show"
						: "expand-details animatedFadeInUp fadeInUp animated"
				}
			>
				<div className="expand-detail-top-section">
					<div>
						<h2>Addtional Information</h2>
					</div>
					<div className="left-btn">
						<h3>Edit Adtional Info</h3>
					</div>
				</div>
				<div style={{ color: "gray" }}>Test Data</div>
				<div className="expand-detail-top-section">
					<div>
						<h2>House Details</h2>
					</div>
					<div className="left-btn">
						<h3>Edit House Details</h3>
					</div>
				</div>
				<div className="house-detail-container">
					<h3>Existing House Details</h3>
					<div className="details-oldHouse-container">
						<div>
							<h4>Floor No.</h4>
							<p>{ele.old_floor_no}</p>
						</div>
						<div>
							<h4>Elevator Available.</h4>
							<p>{ele.old_elevator_availability}</p>
						</div>
						<div>
							<h4>Distance from Elevator / Staircase to truck</h4>
							<p>{ele.old_parking_distance}</p>
						</div>
					</div>
					<h3>New House Details</h3>
					<div className="details-oldHouse-container">
						<div>
							<h4>Floor No.</h4>
							<p>{ele.new_floor_no}</p>
						</div>
						<div>
							<h4>Elevator Available.</h4>
							<p>{ele.new_elevator_availability}</p>
						</div>
						<div>
							<h4>Distance from Elevator / Staircase to truck</h4>
							<p>{ele.new_parking_distance}</p>
						</div>
					</div>
				</div>
				<div className="inventory-details">
					<div className="expand-detail-top-section">
						<div>
							<h2>Inventory Details</h2>
						</div>
						<div className="left-btn">
							<h3>Edit Inventory</h3>
						</div>
					</div>
					<div className="inventory-container">
						{ele.items.inventory.map((element, indde) => (
							<ExpandDetails key={indde} element={element} />
						))}
					</div>
				</div>
			</div>
		</DIV>
	);
};

export default Moves;
