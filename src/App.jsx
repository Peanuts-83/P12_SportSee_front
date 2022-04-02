import "./styles/app.scss";
import { useEffect, useState } from "react";
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
	// Default userId set to 12
	const [userId, setUserId] = useState(12);

	return (
		<div className="App">
			<NavH currentUser={[userId, setUserId]} />
			<div className="app-content">
				<NavV />
				<Dashboard userId={userId} />
			</div>
		</div>
	);
}

export default App;
