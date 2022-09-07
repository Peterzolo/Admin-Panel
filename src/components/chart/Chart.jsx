import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Chart.scss";

const data = [
  {
    "month": "Jan",
    "product_one": 4300,
    "product_two": 3800,
  },
  {
    "month": "Feb",
    "product_one": 3000,
    "product_two": 5043,
  },
  {
    "month": "Mar",
    "product_one": 5600,
    "product_two": 5750,
  },
  {
    "month": "Apr",
    "product_one": 5923,
    "product_two": 6022,
  },
  {
    "month": "May",
    "product_one": 6560,
    "product_two": 6800,
  },
  {
    "month": "Jun",
    "product_one": 7900,
    "product_two": 8034,
  },
 
];

const Chart = () => {
  return (
    <div className="charts-container">
      <div className="chart-title">Monthly Sales Report [ 1st half] 2022</div>
      <BarChart width={730} height={250} data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="month" />
        {/* <YAxis /> */}
        <Tooltip />
        <Legend />
        <Bar dataKey="product_one" fill="#8884d8" />
        <Bar dataKey="product_two" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Chart;
