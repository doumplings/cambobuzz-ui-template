import { Chart } from "react-google-charts";

export const data = [
  ["Months", "Followers"],
  ["Jan", 0],
  ["Feb", 10],
  ["Mar", 15],
  ["Apr", 20],
  ["May", 30],
  ["Jun", 25],
  ["Jul", 20],
  ["Aug", 60],
  ["Sep", 70],
  ["Oct", 90],
  ["Nov", 103],
  ["Dec", 120],
];

export const options = {
  title: "Followers / Month",
  curveType: "function",
  vAxis: {
    viewWindow: {
      max: 200000,
      min: 0,
    },
  },
};

const GrowthChart = () => {
  return (
    <Chart
      chartType="LineChart"
      data={data}
      options={options}
      width={"100%"}
      height={"200px"}
    />
  );
};
export default GrowthChart;
