
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import './WeeklyGraph.css';


ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const WeeklyGraph = () => {
  
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Customer (RS)',
        data: [1200, 1500, 1800, 1700, 1600, 2000, 2200], 
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4,
        pointRadius: 0, 
        pointHoverRadius: 6, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true, 
        },
        ticks: {
          display: true, 
        },
      },
      y: {
        grid: {
          display: false, 
        },
        ticks: {
          display: false, 
        },
      },
    },
  };

  return (
    <div className="dashboard-container">
     
      <div className="cards-row">
        <div className="stats-card">
          <div className="stats-card-icon">
            <i className="fas fa-dollar-sign"></i>
          </div>
          <div className="stats-card-content">
            <h5 className="stats-card-title">Total Sold Tickets</h5>
            <button>500</button>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-card-icon">
            <i className="fas fa-clock"></i>
          </div>
          <div className="stats-card-content">
            <h5 className="stats-card-title">Remaining Tickets</h5>
            <button>202</button>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-card-icon">
            <i className="fas fa-ticket-alt"></i>
          </div>
          <div className="stats-card-content">
            <h5 className="stats-card-title">Total Ticket Limit</h5>
            <button>202</button>
          </div>
        </div>
      </div>

      
      <div className="graph-card">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default WeeklyGraph;
