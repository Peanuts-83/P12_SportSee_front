import getData from "../../app/getData";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Radar({ userId }) {
	const [data, setData] = useState();
	useEffect(() => {
		async function get() {
			const response = await getData("USER_PERFORMANCE", userId);
			setData(response.data);
		}
		get();
	}, [userId]);

	return <div className="Radar">RADAR: </div>;
}

export default Radar;

Radar.proptype = {
	userId: PropTypes.number.isRequired,
};
