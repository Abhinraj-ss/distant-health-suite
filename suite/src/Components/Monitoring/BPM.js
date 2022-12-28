import React,{useEffect,useState} from 'react';
import '../../App.css'
import heart from '../../Assets/heart.svg'
import {db} from './firebase'
import { onValue, ref } from "firebase/database";

function BPM() {
  const [bpmValue,setBpmValue] = useState();
  useEffect(() => {
    const query = ref(db, "bpm");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      setBpmValue(data['value'])
    });
  }, []);

  return (
    <div className="temp">
        <img className="tempVector" alt="" src={heart} />
        <p>{bpmValue}</p>
    </div>
  )
}

export default BPM