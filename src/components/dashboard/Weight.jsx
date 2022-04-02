import getData from "../../app/getData";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

/**
 * This function is used to display the weight of the user
 * @returns A bar chart with two y-axes.
 */
function Weight({ userId, color }) {
	const [data, setData] = useState();
	const dates = data?.map((d) => d.day.split("-")[2]);
	useEffect(() => {
		async function get() {
			const response = await getData("USER_ACTIVITY", userId);
			setData(response.data.sessions);
		}
		get();
	}, [userId]);

	/**
	 * Given a date in the format YYYY-MM-DD, return the day of the month
	 * @returns The day of the month.
	 */
	function formatDate(date) {
		let res = date.split("-")[2];
		res = res[0] === "0" ? res[1] : res;
		return res;
	}

	/**
	 * This function takes in a string and returns a span element with the string as its text
	 * @returns A span element with the text "Poids (kg)" or "Calories (kCal)"
	 */
	function setLegend(text) {
		const types = {
			kilogram: "Poids (kg)",
			calories: "Calories brûlées (kCal)",
		};
		return (
			<span>
				<span
					className="legend_text"
					style={{
						position: "absolute",
						left: "0",
						color: color.dark_grey,
					}}
				>
					Activité quotidienne
				</span>
				<span className="recharts-legend-item-text dark_grey">
					{types[text]}
				</span>
			</span>
		);
	}

	/**
	 * The CustomTooltip function is a React component that takes in an active prop, payload prop, and label prop.
	 *
	 * The active prop is a boolean that tells the component whether or not the tooltip is active.
	 *
	 * The payload prop is an array of objects that contain the data that the tooltip needs to display.
	 *
	 * The label prop is a string that tells the component what label to display.
	 * @returns A div with two p tags.
	 */
	function CustomTooltip({ active, payload }) {
		if (active && payload && payload.length) {
			return (
				<div
					className="custom-tooltip"
					style={{ background: color.red, padding: "5px 5px", color: "white" }}
				>
					<p className="desc">{payload[0].payload.kilogram} Kg</p>
					<p className="desc">{payload[1].payload.calories} kCal</p>
				</div>
			);
		}
		return <div>... waiting for</div>;
	}

	return (
		<div className="Weight">
			{dates && (
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						data={data}
						barCategoryGap={10}
						barGap={5}
						barSize={7}
						margin={{
							top: 15,
							right: 15,
							left: 23,
							bottom: 15,
						}}
					>
						<CartesianGrid strokeDasharray="2 2" vertical={false} />
						<XAxis
							dataKey="day"
							tickFormatter={formatDate}
							tickLine={false}
							tickMargin={15}
							// label={{ value: 'random text', position: 'outsideTopLeft' }}
						/>
						<YAxis
							yAxisId="kilogram"
							type="number"
							domain={["dataMin - 3", "dataMax + 3"]}
							tickLine={false}
							axisLine={false}
							tickMargin={20}
							orientation="right"
						/>
						<YAxis
							yAxisId="calories"
							type="number"
							domain={["dataMin - 50", "dataMax + 50"]}
							hide
						/>
						<Legend
							verticalAlign="top"
							align="right"
							iconType="circle"
							iconSize={8}
							formatter={setLegend}
						/>
						<Tooltip
							content={<CustomTooltip />}
							animationEasing="ease-out"
							active
						/>
						<Bar
							yAxisId="kilogram"
							dataKey="kilogram"
							radius={[20, 20, 0, 0]}
							fill={color.dark_grey}
						/>
						<Bar
							yAxisId="calories"
							dataKey="calories"
							radius={[20, 20, 0, 0]}
							fill={color.red}
						/>
					</BarChart>
				</ResponsiveContainer>
			)}
		</div>
	);
}

export default Weight;

Weight.proptype = {
	userId: PropTypes.number.isRequired,
};
