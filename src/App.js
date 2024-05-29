import Routing from "./components/Routes";
import Sidebar from "./components/Sidebar";
import { DrawerExample } from "./components/Drawer.jsx";
import "./styles/app.css";
import { ChakraProvider } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function App() {
	return (
		<>
			<div id="navbar">
				<div className="logo_container">
					<img
						src="https://boxigo.in/assets/images/home/optimized/boxigo_logo.svg"
						alt=""
					/>
				</div>
				<div className="nav-links">
					<div className="nav-links-container">
						<NavLink
							to={"/"}
							className={({ isActive, isPending }) =>
								isPending
									? "pending-nav"
									: isActive
									? "active-nav"
									: "pending-nav"
							}
						>
							MY MOVES
						</NavLink>
						<NavLink
							to={"/profile"}
							className={({ isActive, isPending }) =>
								isPending
									? "pending-nav"
									: isActive
									? "active-nav"
									: "pending-nav"
							}
						>
							MY PROFILE
						</NavLink>
						<NavLink
							to={"/quote"}
							className={({ isActive, isPending }) =>
								isPending
									? "pending-nav"
									: isActive
									? "active-nav"
									: "pending-nav"
							}
						>
							GET QUOTE
						</NavLink>
						<NavLink
							to={"/logout"}
							className={({ isActive, isPending }) =>
								isPending
									? "pending-nav"
									: isActive
									? "active-nav"
									: "pending-nav"
							}
						>
							LOGOUT
						</NavLink>
					</div>
				</div>
			</div>
			<div className="App">
				<div id="sidebar">
					<Sidebar />
				</div>
				<div id="pages">
					<div className="drawer">
						<ChakraProvider>
							<DrawerExample />
						</ChakraProvider>
						<h1>BOXIGO</h1>
					</div>
					<Routing />
				</div>
			</div>
		</>
	);
}

export default App;
