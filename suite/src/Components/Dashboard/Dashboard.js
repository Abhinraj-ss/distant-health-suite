import { React,useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import './Dashboard.css'
import Logo from '../../Assets/logo.svg'
import AddPatient from './AddPatient'
function Dashboard() {
  const [show, setShow] = useState(false);

  const handleModal = () => setShow(!show);
  return (
    <div className='Dashboard'>
    <div className='top'>
      <div className='head'>
        <img className='logo' src={Logo} alt="logo"/>
        <h2 className='main'><b>Distant Health Suite</b></h2>
      </div>
      <Form.Group className="patientId mb-3">
        <Form.Control placeholder="Patient ID" />
      </Form.Group>
      <h5 className='logout'>LogOut</h5>
    </div>

    <div className='greeting'>
      <div className="time">
        <h3>Good Morning</h3>
        <h5>08:45:00 AM | 21 August 2022</h5>
      </div>
      <div class="vl"></div>
      <div className="doctor">
        <h4>Dr xxxxxxxx</h4>
        <h4>Govt Medical College, Kozhikkode</h4>
      </div>
    </div>
    <div className='observation'>
      <div className="totalCount">
        <h1>1354</h1>
        <p>Patients under observation</p>
      </div>
      <Button variant="primary" onClick={handleModal}>
        Add Patient
      </Button>
      {show && <AddPatient show={show} handleModal={handleModal}/>}
    </div>
    <div className='assistance'>
      <h1>4</h1>
      <p>In Need Of Assistance</p>
    </div>
    </div>
    
  )
}
export default Dashboard