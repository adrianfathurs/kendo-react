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
        <Route name="dashboard" path="/dashboard" element={<DashboardRealTimeMonitoring />}></Route>
        <Route name="dashboard-real-time-monitoring" path="/dashboard/real-time-monitoring" element={<DashboardRealTimeMonitoring />}></Route>
        <Route name="dashboard-pergerakan-barge" path="/dashboard/pergerakan-barge" element={<DashboardPergerakanBarge />}></Route>
        <Route name="dashboard-performance-barging-out-plh" path="/dashboard/performance-barging-out-plh" element={<DashboardPerformanceBargingOutPLH />}></Route>
        <Route name="dashboard-a2b" path="/dashboard/A2B" element={<DashboardA2B />}></Route>
        <Route name="dashboard-chart" path="/chart" element={<Chart />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
