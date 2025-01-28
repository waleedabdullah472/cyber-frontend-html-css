import React from "react";
import "./Dashboard.css"; 
import WeeklyGraph from "./WeeklyGraph"; 
import BarChart2 from "./BarChart2";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Ticket Verification System</h1>
        <button className="logout-btn">Logout</button>
      </div>

      <div className="top-cards">
        <div className="card">
          <div className="card-icon">
            <i className="fas fa-dollar-sign"></i>
          </div>
          <div className="card-content">
            <h5 className="card-title">Total Customer Spending</h5>
            <strong className="card-value">RS: 15,000</strong>
            <p className="card-date">Date: 12/02/2024</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon">
            <i className="fas fa-clock"></i>
          </div>
          <div className="card-content">
            <h5 className="card-title">Pending Payment</h5>
            <strong className="card-value">RS: 25,000</strong>
            <p className="card-date">Date: 15/02/2024</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon">
            <i className="fas fa-ticket-alt"></i>
          </div>
          <div className="card-content">
            <h5 className="card-title">Total Ticket Limit</h5>
            <strong className="card-value">RS: 1,000</strong>
            <p className="card-date">Date: 20/02/2024</p>
            <div className="card-actions">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="left-column">
          <WeeklyGraph />
        </div>

        <div className="right-column">
          <div className="graph-card graph-five">
            <BarChart2 />
          </div>

          <div className="table-card">
            <h5 className="table-title">Booking and Payments Overview</h5>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Package</th>
                  <th>Booked</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Platinum package</td>
                  <td>236</td>
                </tr>
                <tr>
                  <td>Gold package</td>
                  <td>128</td>
                </tr>
                <tr>
                  <td>Silver package</td>
                  <td>28</td>
                </tr>
                <tr>
                  <td>Pending payments</td>
                  <td>78%</td>
                </tr>
                <tr>
                  <td>Cancellations</td>
                  <td>236</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
