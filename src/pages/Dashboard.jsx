import Header from "../components/dashboard/Header";
import Weight from "../components/dashboard/Weight";
import Duration from "../components/dashboard/Duration";
import RadarGraph from "../components/dashboard/RadarGraph";
import Score from "../components/dashboard/Score";
import Counter from "../components/dashboard/Counter";
import getData from "../app/getData";

import PropTypes from "prop-types";
import { Fragment, useEffect, useState } from "react";

/**
 * This function renders the dashboard.
 * @param {number} userId - The id number of current user.
 * @returns The Dashboard component is returning a div element with all the graphics.
 */
function Dashboard({ userId }) {
	// {mainData: array} - Array of objects about the main's user informations.
	const [mainData, setMainData] = useState();
	const score = mainData?.todayScore || mainData?.score;

	// mainData are fetched on each userId change.
	useEffect(() => {
		async function get() {
			const response = await getData("USER_MAIN_DATA", userId);
			setMainData(response.data);
		}
		get();
	}, [userId]);

	// Global variables for colors
	const color = {
		red: "#f00",
		dark_red: "#da0000",
		light_grey: "#fbfbfb",
		grey: "#979797",
		dark_grey: "#282d30",
	};

	return (
		<div className="Dashboard">
			{mainData && (
				<Fragment>
					<Header firstname={mainData.userInfos.firstName} />
					<div className="dashboard_graphs">
						<Weight userId={userId} color={color} />
						<Duration userId={userId} color={color} />
						<RadarGraph userId={userId} color={color} />
						<Score userScore={score} color={color} />
						{Object.keys(mainData.keyData).map((val, i) => (
							<Counter
								data={[val, mainData.keyData[val]]}
								color={color}
								i={`counter-${i}`}
								key={`counter-${i}`}
							/>
						))}
					</div>
				</Fragment>
			)}
		</div>
	);
}

export default Dashboard;

Dashboard.propTypes = {
	userId: PropTypes.number.isRequired,
};
