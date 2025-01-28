
import React from 'react';
import './App.css'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import TicketVerification from './components/TicketVerification';
import Newone from './components/Newone';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import NewOne from './components/Newone';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        <main>
          <Routes>
          <Route path='/Newone' element={<NewOne/>}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/verify-ticket" element={<TicketVerification />} />
           
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
