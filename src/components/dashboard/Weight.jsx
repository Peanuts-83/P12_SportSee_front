import getData from "../../app/getData";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Weight({ userId }) {
	const [data, setData] = useState();
	useEffect(() => {
		async function get() {
			const response = await getData("USER_ACTIVITY", userId);
			setData(response.data);
		}
		get();
	}, [userId]);

	return <div className="Weight">WEIGHT: {JSON.stringify(data)}</div>;
}

export default Weight;

Weight.prototype = {
	userId: PropTypes.number.isRequired,
};
