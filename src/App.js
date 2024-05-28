import Routing from "./components/Routes";
import Sidebar from "./components/Sidebar";
import "./styles/app.css";
function App() {
	return (
		<div className="App">
			<div id="sidebar">
				<Sidebar />
			</div>
			<div id="pages">
				<Routing />
			</div>
		</div>
	);
}

export default App;
