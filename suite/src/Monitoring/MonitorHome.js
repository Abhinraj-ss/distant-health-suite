import './Monitor.css';
import Ecg from './Ecg';
import Temp from './Temp'
import PulseOxy from './PulseOxy';
import bg from '../Assets/bg.png'
import user from '../Assets/User.svg'

function MonitorHome() {
  return (
    <div className="body" >
      {/* <img className="bg" alt="" src={bg} /> */}

      <div className="details">
        <img className="user" alt="" src={user} />  
        <h2>Patient Name</h2>
        <p>+9198xxxxxx34</p>
        <p>Patient ID :203</p>
        <p>Age : 60 years old</p>
        <p>BloodGroup : B+ve</p>
        <p>Weight : 68kg</p>
        <p>Height : 156cms</p>
      </div>
      
      <div className="status-div">
        <div className="rectangle-div1" />
        <div className="health-status-div">Health Status</div>
      </div>
      <PulseOxy/>
      <Ecg/>
      <Temp/>
    </div>
  )
}

export default MonitorHome