import React from 'react';
import '../../App.css'
import o2 from '../../Assets/O2.svg'

function SpO2({value}) {
  return (
    <div className="temp">
        <img className="tempVector" alt="" src={o2} />
        <p>{value}%</p>
    </div>
  )
}

export default SpO2