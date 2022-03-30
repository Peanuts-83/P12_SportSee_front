import getData from "../../app/getData";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Duration({ userId }) {
	const [data, setData] = useState();
	useEffect(() => {
		async function get() {
			const response = await getData("USER_AVERAGE_SESSIONS", userId);
			setData(response.data);
		}
		get();
	}, [userId]);

	return <div className="Duration">DURATION: </div>;
}

export default Duration;

Duration.proptype = {
	userId: PropTypes.number.isRequired,
};
