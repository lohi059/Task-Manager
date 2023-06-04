import React from 'react'
import '../stylesheets/login.css'

function Login() {  
  return (
       <div className='loginpage'>
        <form className='loginform'>
            <h2 className='headertitle'>Login</h2>
            <div className='row'>
            <label>email</label>
            <input
                placeholder="Enter  email"
                className={"inputBox"} />
            </div>
            <div className='row'>
            <label>password</label>
            <input
                placeholder="Enter  password"
                className={"inputBox"} />
            </div>
            <button  className='loginbtn' >Login</button>
            <div className='alternative'>
                <p>Or sign in with:</p>
            </div>
        </form>

       </div> 
  )
}

export default Login