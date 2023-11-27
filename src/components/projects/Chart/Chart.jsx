import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { useState } from "react";

const Chart = () => {
  const [datum, setDatum] = useState(400);
  const data = [
    { name: "A", uv: 200, pv: 2400, amt: 2400 },
    { name: "B", uv: 300, pv: 2400, amt: 2400 },
    { name: "C", uv: datum, pv: 2400, amt: 2400 },
    { name: "D", uv: 100, pv: 2400, amt: 2400 },
  ];
  return (
    <div>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
      <input
        onChange={(e) => {
          setDatum(e.target.value);
        }}
        type="range"
        id="cowbell"
        name="cowbell"
        min="100"
        max="500"
        step="50"
      />
    </div>
  );
};

export default Chart;
