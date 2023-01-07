import React,{useState} from 'react'
import logo from '../../Assets/logo-wyt.svg'
import imgDr from '../../Assets/AuthDr.svg'
import axios from 'axios'
import './Auth.css'

import { Form,Button } from 'react-bootstrap'

function Auth() {
  var [logIn,setLogIn] = useState(true)
  const authData = {}
  const url = (process.env.NODE_ENV==='production')? "https://distantsuite.onrender.com":"http://localhost:5000"
  const api = axios.create({
    baseURL: url
  })

  const postData = async(path,e) =>{
    e.preventDefault();
    e.stopPropagation();

    let formData = [...e.target]
    formData.forEach(element => {
      if(element.name !== "")
        authData[element.name] = element.value
    })
    console.log(path,authData)
    await api.post(path,authData)
    .then(function (response) {
      console.log(response);
      if(response.status === 200){
        console.log(response.data)
      }
      else if(response.status === 201){
        console.log(response.data);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  function changePage(){
    setLogIn(!logIn)
  }

  return (
    <div className='auth'>
      <div className='left'>
        <img className="logo" src={logo} alt=""/>
        <h2>Distant Health Suite</h2>
        <img className="imgDr" src={imgDr} alt=""/>
      </div>

      <div className='right'>
        {logIn ? 
        <div className="logIn">
            <h3><b>Log in</b></h3>
            <Form onSubmit={(e)=>postData("/login",e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />  
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Stay signed in" />
              </Form.Group>
              <Button className='btnAuth' variant="primary" type="submit">
                Log In
              </Button>
            </Form>
            <span>Don't have an account ?
              <button onClick={changePage}><b>Register Now.</b></button>
            </span>
        </div> 
        :
        <div className="register">
        <h3><b>Register</b></h3>
        <Form onSubmit={(e)=>postData("/register",e)}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Enter name" />  
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />  
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control name='cpassword' type="password" placeholder="Password" />
          </Form.Group>
          <Button className='btnAuth' variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <span onClick={changePage}>
          Already have an account ?
          <button ><b>Log in.</b></button>
        </span>
        </div>
        }
      </div>
      <h6>v 0.1</h6>
    </div>
  )
}

export default Auth