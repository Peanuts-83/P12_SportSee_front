import PropTypes from "prop-types";
import apple from "../../assets/apple.svg";
import cheeseburger from "../../assets/cheeseburger.svg";
import chicken from "../../assets/chicken.svg";
import energy from "../../assets/energy.svg";

function Counter({ data, i }) {
	let [type, value] = data;
	value = +value > 999 ? `${Math.floor(value / 1000)},${value - 1000}` : value

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
		proteinCount: "#e6f2ff",
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
	const unit = units[type]

	return (
		<div className={`Counter Counter-${i}`}>
			<div className="counter_icon_cell" style={{ backgroundColor: color }}>
				<img className="counter_icon" src={icon} alt={`icone ${title}`} />
			</div>
			<div className="counter_text">
				<h3>{value}{unit}</h3>
				<p>{title}</p>
			</div>
		</div>
	);
}

export default Counter;

Counter.proptype = {
	data: PropTypes.array.isRequired,
};
