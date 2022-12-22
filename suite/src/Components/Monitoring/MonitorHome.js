import React,{useEffect,useState} from 'react';
import './Monitor.css';
import axios from "axios"
import Ecg from './Ecg';
import Temp from './Temp'
import BPM from './BPM';
import SpO2 from './SpO2';
import user from '../../Assets/User.svg'
import tower from '../../Assets/Tower.svg'
import { Button } from 'react-bootstrap';
import {db} from './firebase'
import { onValue, ref } from "firebase/database";



function MonitorHome() {
  const [projects, setProjects] = useState([]);
  const [ecgValue,setEcgValue] = useState();
  const [rTempValue,setrTempValue] = useState();
  const [bTempValue,setbTempValue] = useState();
  const [spo2Value,setSpo2Value] = useState();
  const [bpmValue,setBpmValue] = useState();
  var patientID = 123;
  const url = (process.env.NODE_ENV==='production')? 
  "https://distantsuite.onrender.com":"http://localhost:5000"
  const api = axios.create({
    baseURL: url
  })
  const getData = async() =>{
    
    await api.post("/test",{p_id:patientID})
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

  useEffect(() => {
    const query = ref(db, "values");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      console.log(data,data['ecg'])
      setEcgValue(data['ecg'])
      setrTempValue(data['rTemp'])
      setbTempValue(data['bTemp'])
      setSpo2Value(data['spo2'])
      setBpmValue(data['bpm'])
      if (snapshot.exists()) {
        Object.values(data).map((project) => {
          setProjects((projects) => [...projects, project]);
        });
      }
    });
  }, []);


  console.log(ecgValue)

  console.log("got into page!!");
  return (
    <div className="body" >
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
        <Button className="close" type='primary'>Goto Dashboard</Button>
      </div>
      <div className="boxes">
        <Ecg value={ecgValue}/> 
        <Temp rTemp={rTempValue} bTemp={bTempValue}/>
        <BPM value={bpmValue}/>
        <SpO2 value={spo2Value}/>
      </div>
      
    </div>
  )
}

export default MonitorHome