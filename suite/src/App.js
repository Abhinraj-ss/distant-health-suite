import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import MonitorHome from './Components/Monitoring/MonitorHome';
import Dashboard from './Components/Dashboard/Dashboard';
import Auth from './Components/Auth/Auth';
import LineGraph from './Components/Monitoring/LineGraph';
import './App.css'

function App() {
  const isLoggedIn = false
  return (
    <div className='App'>
      {/* <LineGraph/> */}
       {/* <Auth/> */}
      {/* <Dashboard/>   */}
       <MonitorHome/>
    </div>
    
  )
}

export default App
