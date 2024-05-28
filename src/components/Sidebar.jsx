import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import { DIV } from "../styled-components/navlink";

const Sidebar = () => {
	return (
		<div className="sidebar-container">
			<NavLink
				to={"/"}
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : "pending"
				}
			>
				<DIV>MY MOVES</DIV>
			</NavLink>
			<NavLink
				to={"/profile"}
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : "pending"
				}
			>
				<DIV>MY PROFILE</DIV>
			</NavLink>
			<NavLink
				to={"/quote"}
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : "pending"
				}
			>
				<DIV>GET QUOTE</DIV>
			</NavLink>
			<NavLink
				to={"/logout"}
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : "pending"
				}
			>
				<DIV>LOGOUT</DIV>
			</NavLink>
		</div>
	);
};

export default Sidebar;
