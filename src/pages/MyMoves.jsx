import React, { useEffect, useState } from "react";
import Moves from "../components/Moves";
import { getData } from "../api";
import "../styles/moves.css";
import "../styles/loader.css";

const MyMoves = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	// console.log(data);
	useEffect(() => {
		getData(setLoading, setData);
	}, []);
	return (
		<div>
			<div className="headers">
				<h1>MyMoves</h1>
			</div>
			<div className="moves-container">
				{loading ? (
					<section className="dots-container">
						<div className="dot"></div>
						<div className="dot"></div>
						<div className="dot"></div>
						<div className="dot"></div>
						<div className="dot"></div>
					</section>
				) : (
					data?.length > 0 &&
					data?.map((ele, ind) => <Moves key={ind} ele={ele} />)
				)}
			</div>
		</div>
	);
};

export default MyMoves;
