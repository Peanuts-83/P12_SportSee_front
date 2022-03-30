import PropTypes from "prop-types";

function Counter({ data, i }) {
    const [type, value] = data
	const types = {
		calorieCount: "Calories",
		proteinCount: "Protéines",
		carbohydrateCount: "Glucides",
		lipidCount: "Lipides",
	};
    const title = types[type]

	return (
    <div className={`Counter Counter-${i}`}>
        {title} : {value}
    </div>
    );
}

export default Counter;

Counter.proptype = {
	data: PropTypes.array.isRequired,
};