"use client";
import { ResponsiveContainer, Line, LineChart, XAxis, Tooltip } from "recharts";

const CustomTooltip = ({ payload, label, active }) => {
  console.log("Entered");
  const dateLabel = new Date(label).toLocaleString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  if (active) {
    const analysis = payload[0].payload;
    return (
      <div className="p-8 custom-tooltip bg-white shadow-md border border-black rounded-lg backdrop-blur-md relative">
        <div
          className="absolute left-2 top-2 w-2 h-2 rounded-full"
          style={{ background: analysis.color }}
        ></div>
        <p className="label text-sm text-black">{dateLabel}</p>
        <p className="intro text-xl uppercase">{analysis.mood}</p>
      </div>
    );
  }
};
const HistoryChart = ({ data }) => {
  return (
    <div className="w-[90%] p-10 h-[90%] shadow-xl bg-[#ffffff] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 mt-[20px] ml-10">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <Line
            type="monotone"
            dataKey="sentiment"
            stroke="#6e6e73"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <XAxis dataKey="createdAt" stroke="#000000" />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HistoryChart;
