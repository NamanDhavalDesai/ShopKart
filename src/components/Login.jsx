import React, {useState} from 'react'
import './login.css'
import {Link} from "react-router-dom"

export const Login = () => {
  const [username, setTextusername] = useState('Enter username')
  const [password, setTextpassword] = useState('')
  const handlechangeusername = (event) => {
    setTextusername(event.target.value)
  }
  const handlechangepassword = (event) => {
    setTextpassword(event.target.value)
  }
  return (
    <>
      <div className="container" style={{marginBottom:"55px"}}>
        <h1  className='text-center'>Login</h1>
        <form className='FullForm'>
          <div className="form-group">
            <label className='Mainfield'>User Name</label>
            <input type="text" className="form-control" id="Username" onChange={handlechangeusername} value={username}/>
          </div>
          <div className="form-group">
            <label htmlFor="pwd" className='Mainfield'>Password</label> 
            <input type="password" className="form-control" id="pwd" onChange={handlechangepassword} value={password}/> 
          </div>
          <div className="buttons">
            <Link to='/products'>
              <button type="submit" className="btn btn-success">Sign-in</button> 
            </Link>
            <Link to='/signup'>
              <button type="sign-up" className="btn btn-primary" >Sign-Up</button> 
            </Link>
          </div>
        </form>
      </div>  
    </>
  )
}
