import Routing from "./components/Routes";
import Sidebar from "./components/Sidebar";
import { DrawerExample } from "./components/Drawer.jsx";
import "./styles/app.css";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
	return (
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
	);
}

export default App;
