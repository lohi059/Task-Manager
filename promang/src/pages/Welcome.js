import React from 'react'
import Header from '../components/Header'
import '../stylesheets/welcome.css'
import {welcomesentence}from '../data/welcomedata'

function Welcome() {
  return (
    <div className='welcome'>
        <Header/>
         <p className='sentence'>{welcomesentence.string}</p>
    </div>
  )
}

export default Welcome