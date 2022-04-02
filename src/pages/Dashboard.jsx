import Header from "../components/dashboard/Header";
import Weight from "../components/dashboard/Weight";
import Duration from "../components/dashboard/Duration";
import RadarComp from "../components/dashboard/RadarComp";
import Score from "../components/dashboard/Score";
import Counter from "../components/dashboard/Counter";
import getData from "../app/getData";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Dashboard({ userId }) {
	const [mainData, setMainData] = useState();

	useEffect(() => {
		async function get() {
			const response = await getData("USER_MAIN_DATA", userId);
			setMainData(response.data)
		}
		get();
	}, [userId]);

	const color = {
		red: "#f00",
		dark_red: "#da0000",
		light_grey: "#fbfbfb",
		grey: "#979797",
		dark_grey: "#282d30",
	};

	return (
		<div className="Dashboard">
			<Header firstname={mainData?.userInfos.firstName} />
			<div className="dashboard_graphs">
				<Weight userId={userId} color={color} />
				<Duration userId={userId} color={color} />
				<RadarComp userId={userId} color={color} />
				<Score data={mainData?.todayScore || mainData?.score} color={color} />
				{mainData &&
					Object.keys(mainData.keyData).map((val, i) => (
						<Counter data={[val, mainData.keyData[val]]} color={color} i={i} key={`counter-${i}`} />
					))}
			</div>
		</div>
	);
}

export default Dashboard;

Dashboard.proptype = {
	userId: PropTypes.number,
};
