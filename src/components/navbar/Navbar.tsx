import React from 'react'
import "./navbar.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="log">
        <img src="logo.svg" alt="" />
        <span>Haile</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="" className='icon' />
        <img src="app.svg" alt=""  className='icon' />
        <img src="expand.svg" alt=""  className='icon'/>
        <div className="notifications">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://yt3.ggpht.com/I1r40AMM961iLwEkpwUjEYwk2-_263KhWNyR-vmMMqAU5EMZFOYM4Zv5fVxCPDGhDZo2wnzMXQ=s88-c-k-c0x00ffffff-no-rj" alt="" />
          <span>Haile</span>
        </div>
        <img src="setting.svg" alt=""  className='icon'/>
      </div>
    </div>
  )
}

export default Navbar
