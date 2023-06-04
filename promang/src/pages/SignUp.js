import React from 'react'
import '../stylesheets/login.css'

function SignUp() {
  return (
    <div className='loginpage'>
    <form className='signupform'>
        <h2 className='headertitle'>SignUp</h2>
        <div className='row'>
        <label>UserName</label>
        <input
            placeholder="Enter Name"/>
        </div>
        <div className='row'>
        <label>email</label>
        <input
            placeholder="Enter  email"/>
        </div>
        <div className='row'>
        <label>password</label>
        <input
            placeholder="Enter  password" />
        </div>
        <div className='row'>
        <label>confirm password</label>
        <input
            placeholder="Re-Enter  password" />
        </div>
        <button  className='loginbtn' >Sign Up</button>
        <div className='alternative'>
            <p>Or sign in with:</p>
        </div>
        </form>
        </div>
  )
}

export default SignUp