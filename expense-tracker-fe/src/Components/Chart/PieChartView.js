import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const PieChartView = (props) => {
  const dataPoints = props.dataPoints;
  const colors = [
    "blue",
    "red",
    "green",
    "purple",
    "indigo",
    "orange",
    "gray",
    "cyan",
    "golden",
  ];
  const data = dataPoints.map((x, index) => ({ ...x, fill: colors[index] }));
  console.log("Pie");
  console.log(data);
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{`${
            payload[0].name
          } : Rs.${payload[0].value.toLocaleString()}`}</label>
        </div>
      );
    }
  };
  return (
    <div
      style={{
        border: "2px solid",
        display: "flex",
        flexDirection: "row",
        margin: "30px 0px",
      }}
    >
      <PieChart
        width={600}
        height={500}
        style={{ border: "1px solid", padding: "10px" }}
      >
        <Pie
          data={data}
          nameKey="category"
          dataKey="amount"
          cx="50%"
          cy="50%"
          outerRadius={220}
          innerRadius={100}
          fill="#fff"
          label={renderCustomizedLabel}
          labelLine={false}
        />
        <Legend layout="vertical" verticalAlign="start" align="right" />

        <Tooltip content={CustomTooltip} />
      </PieChart>
      <div style={{}}>
        <h2 style={{ top: "205px", left: "-435px", position: "relative" }}>
          Total Expense
        </h2>
        <h2 style={{ top: "185px", left: "-405px", position: "relative" }}>
          Rs.
          {data
            .reduce((acc, o) => acc + parseInt(o.amount), 0)
            .toLocaleString()}
        </h2>
      </div>
    </div>
  );
};

export default PieChartView;

/*
import { PieChart } from "react-minimal-pie-chart";

const PieChartView = (props) => {
  const dataPoints = props.dataPoints;
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <PieChart
        data={dataPoints}
        lineWidth="100"
        radius={50}
        width={50}
        height={50}
        ratio={500}
      />
      ;
    </div>
  );
};
*/
