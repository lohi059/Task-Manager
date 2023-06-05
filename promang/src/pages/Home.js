import React from 'react'
import { SidebarData } from '../data/sidebardata'
import "../stylesheets/home.css"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';

function Home() {
  const [open,toggle] = useState(true);
  return (
    <div className='home'>
      <div id={open?"open":"close"}className='sidebar'>
      <div className='menu' onClick={()=>{toggle((open)=>!open)}}> 
      <div id={open?"open":"close"} className='listicon'><MenuRoundedIcon/></div>
      <div id={open?"open":"close"} className='listtitle'>Menu</div>
      </div>
      {SidebarData.map((val,key)=>{
        return(<li  key={key} 
                   id={window.location.pathname===val.link? "active":"inactive"}
                   onClick={()=>{window.location.pathname=val.link}} className='sidebarlist'>
          <div id={open?"open":"close"}className='listicon'>{val.icon}</div>
          <div id={open?"open":"close"} className='listtitle'>{val.title}</div></li>)
      })}
      </div>
      <div id={open?"open":"close"} className='content'>
      {SidebarData.filter(SidebarData=>SidebarData.link===window.location.pathname).map((val,key)=>{
        return(
          <div>{val.component}</div>
        )
      })}
      </div>
    </div>
  )
}

export default Home