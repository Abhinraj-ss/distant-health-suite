import '../App.css'

function Temp() {
  return (
    <div className="temp-div">
    <div className="temp-div1" />
    <div className="body-div">
      <div className="c-div">{`28.04 0C `}</div>
      <img className="vector-icon2" alt="" src="../vector2.svg" />
      <img className="ellipse-icon1" alt="" src="../ellipse-4.svg" />
    </div>
    <div className="home-div">
      <div className="c-div1">{`29.04 0C `}</div>
      <img className="vector-icon3" alt="" src="../vector3.svg" />
      <img className="ellipse-icon2" alt="" src="../ellipse-4.svg" />
    </div>
  </div>
  )
}

export default Temp