import "./styles/app.scss";
import Dashboard from "./pages/Dashboard";
import NavH from "./components/NavH";
import NavV from "./components/NavV";

/**
 * This function component returns the global Dashboard App.
 * NavH - Horizontal nav covers 100% width.
 * .app-content - Container for NAvV & Dashboard component.
 * NavV - Vertical Nav covers 100% height.
 * Dashboard - Contains all graphics & user data.
 * @returns The global interface of SportSee Dashboard
 */
function App() {
	return (
		<div className="App">
			<NavH />
			<div className="app-content">
				<NavV />
				<Dashboard />
			</div>
		</div>
	);
}

export default App;
