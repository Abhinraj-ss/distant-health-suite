import '../App.css'
import o2 from '../Assets/O2.svg'

function SpO2() {
  return (
    <div className="temp">
        <img className="tempVector" alt="" src={o2} />
        <p>28.04<sup>o</sup>C</p>
    </div>
  )
}

export default SpO2