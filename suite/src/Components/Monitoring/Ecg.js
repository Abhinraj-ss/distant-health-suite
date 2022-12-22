import React from 'react';
import LineGraph from "./LineGraph"
import './Monitor.css'

function Ecg({value}) {
  console.log(value)
  return (
      <div className="ecg">
        <LineGraph value={value}/>
      </div>
  )
}

export default Ecg