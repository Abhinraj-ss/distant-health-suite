import React,{useEffect,useState} from 'react';
import '../../App.css'
import o2 from '../../Assets/O2.svg'
import {db} from './firebase'
import { onValue, ref } from "firebase/database";

function SpO2() {
  const [spo2Value,setSpo2Value] = useState();
  useEffect(() => {
    const query = ref(db, "values");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      setSpo2Value(data['spo2'])
    });
  }, []);

  return (
    <div className="temp">
        <img className="tempVector" alt="" src={o2} />
        <p>{spo2Value}%</p>
    </div>
  )
}

export default SpO2