import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

// Import layout
import Main from './layout/Main';
// Import component
import Home from './views/Home';
import DashboardRealTimeMonitoring from './views/Dashboard/DashboardRealTimeMonitoring';
import DashboardPergerakanBarge from './views/Dashboard/DashboardPergerakanBarge';
import DashboardPerformanceBargingOutPLH from './views/Dashboard/DashboardPerformanceBargingOutPLH';
import DashboardA2B from './views/Dashboard/DashboardA2B';
import Chart from './views/Chart';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route element={<Main />}>
        <Route path="/dashboard" element={<DashboardRealTimeMonitoring />}></Route>
        <Route path="/dashboard/real-time-monitoring" element={<DashboardRealTimeMonitoring />}></Route>
        <Route path="/dashboard/pergerakan-barge" element={<DashboardPergerakanBarge />}></Route>
        <Route path="/dashboard/performance-barging-out-plh" element={<DashboardPerformanceBargingOutPLH />}></Route>
        <Route path="/dashboard/A2B" element={<DashboardA2B />}></Route>
        <Route path="/chart" element={<Chart />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
