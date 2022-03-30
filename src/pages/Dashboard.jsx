import Header from "../components/dashboard/Header";
import Weight from "../components/dashboard/Weight";
import Duration from "../components/dashboard/Duration";
import Radar from "../components/dashboard/Radar";
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
			setMainData(response.data);
		}
		get();
	}, [userId]);

	return (
		<div className="Dashboard">
			<Header firstname={mainData?.userInfos.firstName} />
			<div className="dashboard_graphs">
				<Weight userId={userId} />
				<Duration userId={userId} />
				<Radar userId={userId} />
				<Score data={mainData?.todayScore} />
				{mainData &&
					Object.keys(mainData.keyData).map((val, i) => (
						<Counter data={[val, mainData.keyData[val]]} i={i} key={`counter-${i}`} />
					))}
			</div>
		</div>
	);
}

export default Dashboard;

Dashboard.proptype = {
	userId: PropTypes.number,
};
