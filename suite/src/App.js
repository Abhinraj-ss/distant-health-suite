import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import MonitorHome from './Monitoring/MonitorHome';
import Dashboard from './Dashboard/Dashboard';
import Auth from './Auth/Auth';
import LineGraph from './Monitoring/LineGraph';
import './App.css'

function App() {
  return (
    <div className='App'>
      {/* <LineGraph/> */}
       {/* <Auth/>  */}
      {/* <Dashboard/> */}
      <MonitorHome/>
    </div>
    
  )
}

export default App
