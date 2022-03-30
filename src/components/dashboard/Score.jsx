import PropTypes from "prop-types";

function Score({ data }) {
	return <div className="Score">SCORE: </div>;
}

export default Score;

Score.proptype = {
	data: PropTypes.number.isRequired,
};
