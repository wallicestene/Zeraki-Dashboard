import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

// eslint-disable-next-line react/prop-types
const PieChart = ({ data, title }) => {
  // Bar chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
  return (
    <div className=" w-full max-w-[600px] h-[400px]">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
