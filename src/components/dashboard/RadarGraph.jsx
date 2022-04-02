import getData from "../../app/getData";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
	RadarChart,
	Radar,
	PolarAngleAxis,
	PolarRadiusAxis,
	PolarGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

function RadarGraph({ userId, color }) {
	const [data, setData] = useState();
	let kind, values, modelData;
	kind = data?.kind;
	values = data?.data;
	modelData = values?.map((val, index) => {
		return { key: kind[index + 1], value: val.value };
	});
	modelData = modelData?.reverse();

	useEffect(() => {
		async function get() {
			const response = await getData("USER_PERFORMANCE", userId);
			setData(response.data);
		}
		get();
	}, [userId]);

	const names = {
		cardio: "Cardio",
		energy: "Energie",
		endurance: "Endurance",
		strength: "Force",
		speed: "Vitesse",
		intensity: "Intensité",
	};

	function setTick(props) {
		const { payload, x, y } = props;
		const value = payload.value;
		// console.log("TICK", value, payload);
		const side = payload.coordinate;
		return (
			<text
				x={x}
				y={payload.index === 3 ? y + 10 : y}
				textAnchor={
					side >= -30 && Math.abs(side) !== 90
						? "start"
						: Math.abs(side) === 90
						? "middle"
						: "end"
				}
				margin={5}
				fill="white"
			>
				{names[value]}
			</text>
		);
	}

	function CustomTooltip({ active, payload }) {
		console.log(payload)
		if (active && payload && payload.length) {
			return (
				<div
					className="custom-tooltip"
					style={{ background: "white", padding: "10px 5px", color: color.red }}
				>
				<span className="desc">{names[payload[0].payload.key]} : {payload[0].payload.value}</span>
					<span className="desc"></span>
				</div>
			);
		}
		return <div>... waiting for</div>;
	}

	return (
		<div className="Radar">
			{modelData && (
				<ResponsiveContainer height='100%' width="100%">
					<RadarChart data={modelData} margin={{top: 30, bottom: 30, left: 30, right: 30}}>
						<PolarGrid radialLines={false} />
						<PolarAngleAxis
							dataKey="key"
							tick={setTick}
							tickLine={false}
						/>
						<PolarRadiusAxis
							angle={30}
							type="number"
							tick={false}
							axisLine={false}
							tickCount="6"
							line="0"
						/>
						<Radar
							dataKey="value"
							fill={color.red}
							fillOpacity={0.6}
							animationEasing={"ease-out"}
							stroke="none"
						/>
						<Tooltip
							content={<CustomTooltip />}
							animationEasing="ease-out"
							active
						/>
					</RadarChart>
				</ResponsiveContainer>
			)}
		</div>
	);
}

export default RadarGraph;

RadarGraph.proptype = {
	userId: PropTypes.number.isRequired,
};
