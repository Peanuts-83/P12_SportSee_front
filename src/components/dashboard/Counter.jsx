import PropTypes from "prop-types";
import apple from "../../assets/apple.svg";
import cheeseburger from "../../assets/cheeseburger.svg";
import chicken from "../../assets/chicken.svg";
import energy from "../../assets/energy.svg";

/**
 * It takes a data object and an index, and returns a React component
 * @param {array} data - Array of name type & a numeric value.
 * @returns A div with two children:
 * 	- A div with a background color corresponding to the color of the type of counter
 * 	- A div with two children:
 * 		- An img with the icon corresponding to the type of counter
 * 		- A h3 with the value of the counter
 * 		- A p with the title of the counter
 */
function Counter({ data, i }) {
	let [type, value] = data;
	value = +value > 999 ? `${Math.floor(value / 1000)},${value - 1000}` : value;

	const types = {
		calorieCount: "Calories",
		proteinCount: "Protéines",
		carbohydrateCount: "Glucides",
		lipidCount: "Lipides",
	};

	const icons = {
		calorieCount: energy,
		proteinCount: chicken,
		carbohydrateCount: apple,
		lipidCount: cheeseburger,
	};

	const colors = {
		calorieCount: "#ffe6e6",
		proteinCount: "#DBECFF",
		carbohydrateCount: "#fff5cc",
		lipidCount: "#ffe6f9",
	};

	const units = {
		calorieCount: "kCal",
		proteinCount: "g",
		carbohydrateCount: "g",
		lipidCount: "g",
	};

	const title = types[type];
	const icon = icons[type];
	const color = colors[type];
	const unit = units[type];

	return (
		<div className={`Counter Counter-${i}`}>
			<div className="counter_icon_cell" style={{ backgroundColor: color }}>
				<div>
					<img className="counter_icon" src={icon} alt={`icone ${title}`} />
				</div>
			</div>
			<div className="counter_text">
				<h3>
					{value}
					{unit}
				</h3>
				<p>{title}</p>
			</div>
		</div>
	);
}

export default Counter;

Counter.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.oneOf([
				"calorieCount",
				"proteinCount",
				"carbohydrateCount",
				"lipidCount",
			]),
			PropTypes.number
		])
	).isRequired,
	i: PropTypes.string.isRequired,
};
