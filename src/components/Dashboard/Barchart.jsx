/* eslint-disable react/prop-types */

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// eslint-disable-next-line react/prop-types


const Barchart = ({ data, title }) => {
  // Bar chart options

  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: title,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  return (
    <div className=" w-full max-w-[600px] h-[400px] ">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Barchart;
