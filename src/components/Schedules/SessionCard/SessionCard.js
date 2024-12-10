import React from 'react'
import '../SessionCard/SessionCard.css'

function SessionCard() {
  return (
    <div className='session'>
        <div className='session-card'>
            <div className='session-profile'>
                <img src='profile-img.png' alt='profile' className='profile-img'/>
                <h3 className='profile-name'>Mohammed Naeem</h3>
            </div>
            <div className='session-meeting'>
                 <p class="meeting-title">Meeting Link</p>
                 <img src='googlemeet-icon.png' alt='meeting-icon' className='meeting-icon'/>
                 <img src='copy-icon.png' alt='copy-icon' className='copy-icon'/>
                 <a href="https://www.google.com/search?q=fg&rlz" className='meeting-link'>https://www.google.com/search?q=fg&rlz</a> 
            </div>
        </div>
        <div className='session-info'>
            <div className='session-junior'>
              <p class="profile-junior">Junior: Rashad</p>
           </div>
           <div className='session-actions'>
              <div className='action-btn'>
                <img src='reschedule-icon.png'alt='reschedule-icon'className='button-icon'/>
                <button className="reschedule-btn">Reschedule Session</button>
              </div>
              <div className='session-cancel'>
                <img src='cancel-icon.png'alt='reschedule-icon'className='button-icon'/>
                <button className="cancel-btn">Cancel Session</button>
              </div>
           </div>
            <div class="session-details">
              <p className='section-details'>
                 <img src="location-icon.png" alt="Location Icon" class="icon" />
                 Germany
              </p>
              <p className='section-details'>
                 <img src="calendar-icon.png" alt="Calendar Icon" class="icon" />
                 12-10-2023 | 09:30 to 10:30
              </p>
              <p className='section-details'>
                 <img src="clock-icon.png" alt="Clock Icon" class="icon" />
                 30 Min
              </p>
            </div>
            <div className='session-download'>
                <div className='upcoming'>
                  <button class="upcoming-btn">upcoming</button>
                </div>  
                  <img src='download-icon.png' alt='invoice-icon'className='invoice-icon'/>
                <div className='download'>
                  <button class="download-btn">Download Invoice</button>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default SessionCard