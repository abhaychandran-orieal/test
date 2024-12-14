import React from 'react'
import './SeniorHeader.css'

function SeniorHeader() {
  return (
    <div className='seniors-header'>
       <div className='senior-header-container'>
          <div className='header-left'>
             <div className='title'>
                <p className='header-title'>Admin /</p>
                <h1 className='sub-title' >Seniors</h1>
             </div>
             <div className='search-bar'>
                <img src='logo1.png' alt='search' className='search-icon'/>
                <input type='text'placeholder='Search' className='search-input'/>
             </div>
          </div>
          <div className='header-right'>
             <div className='actions'>
               <img src='logo2.png' alt='icons'className='icon1' />
               <img src='logo3.png' alt='icons'className='icon2' />
               <img src='logo4.png' alt='icons'className='icon3' />
               <img src='logo5.png' alt='icons'className='icon4' />
               <img className='profile-pic' src='logo6.png' alt='Profile'/>
             </div> 
          </div>
       </div>
    </div>
  )
}


export default SeniorHeader
