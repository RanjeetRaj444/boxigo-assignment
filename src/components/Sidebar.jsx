import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import { DIV } from "../styled-components/navlink";
import { RiLogoutCircleLine } from "react-icons/ri";
import { AiOutlineSchedule } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { TbTruckDelivery } from "react-icons/tb";

const Sidebar = () => {
	return (
		<div className="sidebar-container">
			<NavLink
				to={"/"}
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : "pending"
				}
			>
				<DIV>
					<TbTruckDelivery /> MY MOVES
				</DIV>
			</NavLink>
			<NavLink
				to={"/profile"}
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : "pending"
				}
			>
				<DIV>
					<CgProfile /> MY PROFILE
				</DIV>
			</NavLink>
			<NavLink
				to={"/quote"}
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : "pending"
				}
			>
				<DIV>
					<AiOutlineSchedule /> GET QUOTE
				</DIV>
			</NavLink>
			<NavLink
				to={"/logout"}
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : "pending"
				}
			>
				<DIV>
					<RiLogoutCircleLine /> LOGOUT
				</DIV>
			</NavLink>
		</div>
	);
};

export default Sidebar;
