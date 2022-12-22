import React from 'react';
import '../../App.css'
import home from '../../Assets/Home.svg'
import temp from '../../Assets/Temp.svg'

function Temp() {
  return (
    <div className="temp">
        <img className="tempVector" alt="" src={home}/>  
        <p>29.04<sup>o</sup>C</p>
        <img className="tempVector" alt="" src={temp} />
        <p>28.04<sup>o</sup>C</p>
  </div>
  )
}

export default Temp