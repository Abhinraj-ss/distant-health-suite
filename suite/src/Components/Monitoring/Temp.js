import React,{useState,useEffect} from 'react';
import '../../App.css'
import home from '../../Assets/Home.svg'
import temp from '../../Assets/Temp.svg'
import {db} from './firebase'
import { onValue, ref } from "firebase/database";

function Temp() {
  const [rTempValue,setrTempValue] = useState();
  const [bTempValue,setbTempValue] = useState();

  useEffect(() => {
    const query = ref(db, "values");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      setrTempValue(data['rTemp'])
      setbTempValue(data['bTemp'])
    });
  }, []);


  return (
    <div className="temp">
        <img className="tempVector" alt="" src={home}/>  
        <p>{rTempValue}<sup>o</sup>C</p>
        <img className="tempVector" alt="" src={temp} />
        <p>{bTempValue}<sup>o</sup>C</p>
  </div>
  )
}

export default Temp