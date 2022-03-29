import PropTypes from "prop-types";

function Score({ data }) {
	return <div className="Score">SCORE: {data}</div>;
}

export default Score;

Score.prototype = {
	data: PropTypes.number.isRequired,
};
