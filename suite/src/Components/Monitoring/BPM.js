import React from 'react';
import '../../App.css'
import heart from '../../Assets/heart.svg'

function BPM({value}) {
  return (
    <div className="temp">
        <img className="tempVector" alt="" src={heart} />
        <p>{value}</p>
    </div>
  )
}

export default BPM