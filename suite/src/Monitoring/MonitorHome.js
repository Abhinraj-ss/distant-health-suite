import './Monitor.css';
import Ecg from './Ecg';
import Temp from './Temp'
import PulseOxy from './PulseOxy';

function MonitorHome() {
  return (
    <div className="normal-div">
    <img className="rectangle-icon" alt="" src="../rectangle-12@2x.png" />
    <div className="details-pane-div">
      <div className="rectangle-div" />
      <div className="patient-name-div">Patient Name</div>
      <div className="xxxxxx34-div">+9198xxxxxx34</div>
      <div className="patient-id-203">Patient ID :203</div>
      <div className="age-60-years-old">Age : 60 years old</div>
      <div className="bloodgroup-bve">BloodGroup : B+ve</div>
      <div className="weight-68kg">Weight : 68kg</div>
      <div className="height-156cms">Height : 156cms</div>
      <img className="vector-icon" alt="" src="../vector.svg" />
    </div>
    <div className="status-div">
      <div className="rectangle-div1" />
      <div className="health-status-div">Health Status</div>
      <img className="ellipse-icon" alt="" src="../ellipse-2.svg" />
      <img className="vector-icon1" alt="" src="../vector1.svg" />
    </div>
    <PulseOxy/>
    <Ecg/>
    <Temp/>
  </div>
  )
}

export default MonitorHome