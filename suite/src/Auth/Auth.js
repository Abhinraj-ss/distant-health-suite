import {React,useState} from 'react'
import logo from '../Assets/logo-wyt.png'
import './Auth.css'

import { Form,Button } from 'react-bootstrap'

function Auth() {

  const [logIn,setLogIn] = useState(true)
  return (
    <div className='auth'>
      <div className='left'>
        <img src={logo} alt=""/>
        <h2>Distant Health Suite</h2>
      </div>

      <div className='right'>
        {logIn ? 
        <div className="logIn">
            <h3><b>Log in</b></h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />  
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Stay signed in" />
              </Form.Group>
              <Button className='btnAuth' variant="primary" type="submit">
                Log In
              </Button>
            </Form>
            <span>Don't have an account ?
              <button><b>Register Now.</b></button>
            </span>
        </div> 
        :
        <div className="register">
        <h3><b>Register</b></h3>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />  
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />  
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Stay signed in" />
          </Form.Group>
          <Button className='btnAuth' variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <span>Already have an account ?
          <button><b>Log in.</b></button>
        </span>
        </div>
        }
      </div>
      <h6>v 0.1</h6>
    </div>
  )
}

export default Auth