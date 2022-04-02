import PropTypes from "prop-types";
import { PieChart, Pie, Legend, ResponsiveContainer } from "recharts";

/**
 * This function is used to display the score of the user.
 * @param {number} userScore - Score float number of the user.
 * @param {string} color - Colors from dashboard.
 * @returns A partial donut with the user's score.
 */
function Score({ userScore, color }) {
	// Build modelData with the score of the user & (1 - userScore)
	const modelData = [
		{ name: "score", value: 1 - userScore, stroke: 'transparent' },
		{ name: "score", value: userScore, stroke: 'red' },
	];

	return (
		<div className="Score">
			<ResponsiveContainer width="100%" height="100%">
				<PieChart margin={{ top: 10, bottom: 10 }}>
					<text
						dy="50%"
						dx="50%"
						textAnchor="middle"
						fill={color.dark_grey}
						style={{ fontSize: "2.2vw" }}
					>
						{userScore * 100}%
					</text>
					<text
						dy="60%"
						dx="50%"
						textAnchor="middle"
						fill={color.grey}
					>
						de votre
					</text>
					<text
						dy="70%"
						dx="50%"
						textAnchor="middle"
						fill={color.grey}
					>
						objectif
					</text>
					<Pie
						data={modelData}
						dataKey="value"
						nameKey="name"
						cx="50%"
						cy="50%"
						innerRadius="60%"
						outerRadius="60%"
						fill={color.red}
						startAngle={180}
						endAngle={540}
					/>
					<Legend
						verticalAlign="top"
						align="left"
						content={(payload) => (
							<div
								className="legend_text"
								style={{
									color: "black",
									marginTop: "10px",
									marginLeft: "20px",
									opacity: ".5",
									position: "absolute",
									top: "0",
								}}
							>
								{payload.payload[0].value[0].toUpperCase() +
									payload.payload[0].value.substring(1)}
							</div>
						)}
					/>
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}

export default Score;

Score.propTypes = {
	userScore: PropTypes.number.isRequired,
	color: PropTypes.object.isRequired
};
