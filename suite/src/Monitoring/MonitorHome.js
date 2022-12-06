import './Monitor.css';
import axios from "axios"
import useState from "react"
import Ecg from './Ecg';
import Temp from './Temp'
import PulseOxy from './PulseOxy';
import bg from '../Assets/bg.png'
import user from '../Assets/User.svg'
import tower from '../Assets/Tower.svg'
import close from '../Assets/Close.svg'

function MonitorHome() {
  var patientID = 123;
  const [url,setUrl] = useState(()=>{
    if(process.env.NODE_ENV==='production'){
      return "https://distantsuite.onrender.com" 
    } else if(process.env.NODE_ENV==='development')
       return "http://localhost:5000"
  } )
  const api = axios.create({
    baseURL: url
  })
  const getData = async() =>{
    
    await api.post("/",{p_id:patientID})
    .then(function (response) {
      console.log(response);
      if(response.status === 200){
        console.log(response.data)
        console.log("Patient data exists!!");
      }
         
      else if(response.status === 201){
        console.log("no patient data exists!!",response);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  getData()
  return (
    <div className="body" >
      {/* <img className="bg" alt="" src={bg} /> */}

      <div className="details">
        <img className="user" alt="" src={user} />  
        <h4>Patient Name</h4>
        <p>+9198xxxxxx34</p>
        <p>Patient ID :203</p>
        <p>Age : 60 years old</p>
        <p>BloodGroup : B+ve</p>
        <p>Weight : 68kg</p>
        <p>Height : 156cms</p>
      </div>
      
      <div className="status">
        <div className="patientStatus">
          <span className="circle"></span>
          <p>Health Status</p>
        </div>
        <img className="tower" alt="" src={tower}/>
        <img className ="close" alt="" src = {close}/>
      </div>
      <div className="boxes">
        <Ecg/>
        <Temp/>
        <PulseOxy/>
      </div>
      
    </div>
  )
}

export default MonitorHome