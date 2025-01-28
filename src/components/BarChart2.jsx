import React from "react";
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart2 = () => {
  const data = {
    labels: ["27/02/24", "28/02/24", "29/02/24", "24/02/24", "25/02/24", "26/02/24"],
    datasets: [
      {
        data: [60, 80, 70, 50, 90, 100],
        backgroundColor: "#A9A9FF",
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 20,
        barThickness: 15,
        minBarLength: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Total Earnings (Paid Out Tickets)",
        color: "white",
        font: { size: 12 },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Value: ${tooltipItem.raw}`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "white" },
        grid: { display: false },
        barPercentage: 0.6,
        categoryPercentage: 0.4,
      },
      y: {
        ticks: { display: false },
        grid: { display: false },
      },
    },
    layout: {
      padding: { top: 20 },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "#2F2F2F",
        padding: "45px",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        height: "40vh",
        margin: "auto",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart2;
