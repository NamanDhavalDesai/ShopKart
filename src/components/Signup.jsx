import React, {useState} from 'react'
import {Link} from "react-router-dom";
export const Signup = () => {
  const [username, setTextusername] = useState('Enter username')
  const [email, setTextemail] = useState('Enter username')
  const [password, setTextpassword] = useState('')
  const handlechangeusername = (event) => {
    setTextusername(event.target.value)
  }
  const handlechangeemail = (event) => {
    setTextemail(event.target.value)
  }
  const handlechangepassword = (event) => {
    setTextpassword(event.target.value)
  }
  return (
    <>
      <div className="container" style={{paddingTop:"30px"}}>
        <h1  className='text-center'>Sign Up</h1>
        <form className='FullForm' style={{marginTop: "12px"}}>
          <div className="form-group">
            <label className='Mainfield'>User Name</label>
            <input type="text" className="form-control" id="Username" onChange={handlechangeusername} value={username}/>
          </div>
          <div className="form-group">
            <label htmlFor="email" className='Mainfield'>Email</label>
            <input type="email" className="form-control" id="email" onChange={handlechangeemail} value={email}/>
          </div>
          <div className="form-group">
            <label htmlFor="pwd" className='Mainfield'>Password</label> 
            <input type="password" className="form-control" id="pwd" onChange={handlechangepassword} value={password}/> 
          </div>
          <div className="buttons">
            <Link to='/Products'>
              <button type="submit" className="btn btn-success">Submit</button> 
            </Link>
          </div>
        </form>
      </div>  
    </>
  )
}
