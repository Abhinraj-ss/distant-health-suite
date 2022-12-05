import '../App.css'
import home from '../Assets/Home.svg'
import temp from '../Assets/Temp.svg'

function Temp() {
  return (
    <div className="temp-div">
    <div className="temp-div1" />
    <div className="home-div">
      <div className="c-div1">{`29.04 0C `}</div>
      <img className="vector-icon3" alt="" src={home} />  
    </div>
    <div className="body-div">
      <div className="c-div">{`28.04 0C `}</div>
      <img className="vector-icon2" alt="" src={temp} />
    </div>
  </div>
  )
}

export default Temp