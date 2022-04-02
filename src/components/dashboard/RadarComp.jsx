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

function RadarComp({ userId, color }) {
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
			// console.log("DATA", response.data);
			setData(response.data);
		}
		get();
	}, [userId]);

	function setTick(props) {
		const { payload, x, y, cx, cy } = props;
		const value = payload.value;
		const values = {
			cardio: "Cardio",
			energy: "Energie",
			endurance: "Endurance",
			strength: "Force",
			speed: "Vitesse",
			intensity: "Intensité",
		};
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
				{values[value]}
			</text>
		);
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
						<Tooltip />
					</RadarChart>
				</ResponsiveContainer>
			)}
		</div>
	);
}

export default RadarComp;

RadarComp.proptype = {
	userId: PropTypes.number.isRequired,
};
