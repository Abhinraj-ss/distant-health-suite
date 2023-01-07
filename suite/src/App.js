import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import MonitorHome from './Components/Monitoring/MonitorHome';
import Dashboard from './Components/Dashboard/Dashboard';
import Auth from './Components/Auth/Auth';
import './App.css'

function App() {
  const isLoggedIn = false
  return (
    <div className='App'>
       <Auth/> 
      {/* <Dashboard/> */}
       {/* <MonitorHome/> */}
    </div>
    
  )
}

export default App
