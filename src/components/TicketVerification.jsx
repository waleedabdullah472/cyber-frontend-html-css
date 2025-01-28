import React, { useState } from 'react';
import './TicketVerification.css';
import DataTable from 'react-data-table-component';
import Graph from './Graph'; 

const TicketVerification = () => {
  const [ticketNumber, setTicketNumber] = useState('');
  const [message, setMessage] = useState('');
  const [progress, setProgress] = useState(0);
  const [search, setSearch] = useState('');
  const [dataRows, setDataRows] = useState([
    { ticketId: '12345', quality: 'High', tickets: 2, ticketType: 'VIP', purchaseTime: '2024-10-17', transactionId: 'TRX123', registrationStatus: 'Active' },
    { ticketId: '67890', quality: 'Medium', tickets: 1, ticketType: 'Standard', purchaseTime: '2024-10-18', transactionId: 'TRX124', registrationStatus: 'Inactive' },
    { ticketId: '11111', quality: 'High', tickets: 3, ticketType: 'VIP', purchaseTime: '2024-10-19', transactionId: 'TRX125', registrationStatus: 'Active' },
    { ticketId: '22222', quality: 'Low', tickets: 1, ticketType: 'Economy', purchaseTime: '2024-10-20', transactionId: 'TRX126', registrationStatus: 'Inactive' },
    { ticketId: '33333', quality: 'Medium', tickets: 2, ticketType: 'Standard', purchaseTime: '2024-10-21', transactionId: 'TRX127', registrationStatus: 'Active' },
    { ticketId: '44444', quality: 'High', tickets: 1, ticketType: 'VIP', purchaseTime: '2024-10-22', transactionId: 'TRX128', registrationStatus: 'Active' },
    { ticketId: '55555', quality: 'Low', tickets: 1, ticketType: 'Economy', purchaseTime: '2024-10-23', transactionId: 'TRX129', registrationStatus: 'Inactive' },
    { ticketId: '66666', quality: 'Medium', tickets: 2, ticketType: 'Standard', purchaseTime: '2024-10-24', transactionId: 'TRX130', registrationStatus: 'Active' },
    { ticketId: '77777', quality: 'High', tickets: 3, ticketType: 'VIP', purchaseTime: '2024-10-25', transactionId: 'TRX131', registrationStatus: 'Inactive' },
    { ticketId: '88888', quality: 'Low', tickets: 1, ticketType: 'Economy', purchaseTime: '2024-10-26', transactionId: 'TRX132', registrationStatus: 'Active' },
    { ticketId: '99999', quality: 'Medium', tickets: 2, ticketType: 'Standard', purchaseTime: '2024-10-27', transactionId: 'TRX133', registrationStatus: 'Inactive' },
    { ticketId: '10101', quality: 'High', tickets: 1, ticketType: 'VIP', purchaseTime: '2024-10-28', transactionId: 'TRX134', registrationStatus: 'Active' },
  ]);

  const handleVerify = () => {
    setProgress(20);
    setTimeout(() => {
      if (ticketNumber === '12345') {
        setMessage('Ticket is valid!');
        setProgress(100);
      } else {
        setMessage('Ticket is invalid. Please try again.');
        setProgress(0);
      }
    }, 1500);
  };

  const filteredData = dataRows.filter((row) =>
    row.ticketId.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    { name: <b>Ticket ID</b>, selector: (row) => <b>{row.ticketId}</b> },
    { name: <b>Quality</b>, selector: (row) => row.quality },
    { name: <b>Tickets</b>, selector: (row) => row.tickets },
    { name: <b>Ticket Type</b>, selector: (row) => row.ticketType },
    { name: <b>Purchase Time</b>, selector: (row) => row.purchaseTime },
    { name: <b>Transaction ID</b>, selector: (row) => row.transactionId },
    { name: <b>Registration Status</b>, selector: (row) => row.registrationStatus },
    {
      name: <b>Actions</b>,
      button: true,
      cell: (row) => <button className="action-btn">Skin</button>,
    },
  ];

  return (
    <div className="ticket-verification-container">
      <div className="header">
        <h1>Ticket Verification System</h1>
        <button className="logout-btn">Logout</button>
      </div>

      <div className="cards-row">
       
        <div className="activity-tracking-card">
          <Graph />
        </div>

      
        <div className="verify-ticket-card">
          <h2>Verify Your Ticket</h2>
          <div className="verify-ticket-content">
            <h3>Enter Ticket Information</h3>
            <input
              type="text"
              placeholder="Enter ticket number"
              value={ticketNumber}
              onChange={(e) => setTicketNumber(e.target.value)}
            />
            <button onClick={handleVerify}>Verify</button>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${progress}%` }} />
            </div>
            {message && <p className="verification-message">{message}</p>}
          </div>
        </div>
      </div>

    
      <div className="user-list-card">
        <div className="user-list-header">
          <div className="user-list-left">
            <h2>List Users</h2>
          </div>
          <div className="search-bar-right">
            <input
              type="text"
              placeholder="SearchID"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-bar"
            />
          </div>
        </div>

        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          selectableRows
        />
      </div>
    </div>
  );
};

export default TicketVerification;
