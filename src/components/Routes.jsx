import React from "react";
import { Route, Routes } from "react-router-dom";
import MyMoves from "../pages/MyMoves.jsx";
import Profile from "../pages/Profile.jsx";
import Quote from "../pages/Quote.jsx";

const Routing = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<MyMoves />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/quote" element={<Quote />} />
				<Route path="/logout" element={<Quote />} />
			</Routes>
		</div>
	);
};

export default Routing;
