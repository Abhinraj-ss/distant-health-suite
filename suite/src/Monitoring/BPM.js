import '../App.css'
import heart from '../Assets/heart.svg'

function BPM() {
  return (
    <div className="temp">
        <img className="tempVector" alt="" src={heart} />
        <p>65</p>
    </div>
  )
}

export default BPM