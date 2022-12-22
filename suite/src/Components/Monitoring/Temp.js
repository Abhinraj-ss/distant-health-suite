import React from 'react';
import '../../App.css'
import home from '../../Assets/Home.svg'
import temp from '../../Assets/Temp.svg'

function Temp({rTemp,bTemp}) {
  return (
    <div className="temp">
        <img className="tempVector" alt="" src={home}/>  
        <p>{rTemp}<sup>o</sup>C</p>
        <img className="tempVector" alt="" src={temp} />
        <p>{bTemp}<sup>o</sup>C</p>
  </div>
  )
}

export default Temp