import React from 'react'
import '../stylesheets/welcome.css'

function Header() {
  return (
    <header className='topbar'>
        <h3 className='icon'>Task Manager</h3>
        <button className='login' onClick={()=>{window.location.pathname='/login'}}>Login</button>
        <button className='signup' onClick={()=>{window.location.pathname='/signup'}}>SignUp</button>
    </header>
  )
}

export default Header