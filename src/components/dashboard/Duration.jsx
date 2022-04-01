import getData from "../../app/getData";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	ComposedChart,
	Bar,
	Rectangle,
} from "recharts";

function Duration({ userId, color }) {
	const [data, setData] = useState();
	useEffect(() => {
		async function get() {
			const response = await getData("USER_AVERAGE_SESSIONS", userId);
			setData(response.data.sessions);
		}
		get();
	}, [userId]);

	function weekDays(num) {
		const week = ["L", "M", "M", "J", "V", "S", "D"];
		return week[+num - 1];
	}

	function CustomTooltip({ payload }) {
		if (payload && payload.length) {
			// console.log(payload);
			return (
				<div
					className="custom-tooltip"
					style={{ background: "white", padding: "1px 5px" }}
				>
					<p className="desc">{payload[0].payload.sessionLength} min</p>
				</div>
			);
		}
		return <div>... waiting for data</div>;
	}

	function CustomCursor(props) {
		if (props) {
			const { points, width, height } = props;
			const { x, y } = points[0];

			// console.log("props", x,y,width,height);
			return (
				<Rectangle
					fill={color.dark_red}
					x={x}
					y={y - 30}
					width={width}
					height={height * 2}
				/>
			);
		}
		return <div>... waiting for data</div>;
	}

	return (
		<div className="Duration">
			{data && (
				<ResponsiveContainer width="100%" height="100%">
					<LineChart
						data={data}
						margin={{
							top: 30,
							right: 0,
							left: 0,
							bottom: 30,
						}}
					>
						<CartesianGrid vertical={false} horizontal={false} />
						<Tooltip
							content={<CustomTooltip />}
							animationEasing="ease-out"
							cursor={<CustomCursor />}
						/>
						<XAxis
							dataKey="day"
							tickFormatter={weekDays}
							tick={{ fill: "white", opacity: ".7" }}
							tickLine={false}
							tickMargin={15}
							interval="preserveStartEnd"
							// gap={1}
							axisLine={false}
						/>
						<YAxis
							padding={{ top: 0, bottom: 0 }}
							type="number"
							domain={["dataMin -10", "dataMax +10"]}
							allowDataOverflow={true}
							tickLine={false}
							axisLine={false}
							tickMargin={0}
							hide
						/>
						<Legend
							verticalAlign="top"
							align="left"
							iconSize={0}
							content={() => (
								<div
									style={{
										color: "white",
										marginTop: "-10px",
										marginLeft: "20px",
										fontSize: "1.4vw",

										opacity: ".5",
										position: "absolute",
										top: "0",
									}}
								>
									Durée moyenne des
									<br />
									sessions
								</div>
							)}
							margin={{ left: 20 }}
						/>
						<Line
							type="natural"
							dataKey="sessionLength"
							scale="band"
							stroke="white"
							strokeWidth={2}
							dot={false}
							activeDot={{
								fill: "white",
								strokeOpacity: ".5",
								strokeWidth: "10",
								r: 4,
							}}
						/>
					</LineChart>
				</ResponsiveContainer>
			)}
		</div>
	);
}

export default Duration;

Duration.proptype = {
	userId: PropTypes.number.isRequired,
};
