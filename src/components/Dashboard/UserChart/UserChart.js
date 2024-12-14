import React from 'react'
import './UserChart.css'

function UserChart() {
  return (
    
       <div className='userschart'>
          <div className='users-graph'>
                <img src='usergraph.png' alt='graph' className='graph-img'/>
          </div>     
          <div className='pending-requests'>
                <div className='requests-title'>
                    <h2 className='request-heading'>pending Requests</h2>
                </div>
                <div className='requests-details'>
                    <img src='requestprofile-icon1.png' alt='request-icon' className='requestprof-icon'/>
                    <p className='requester-name'>Natali Craig</p>
                    <p className='requested-catagory1'>senior</p>
                    <p className='requested-date1'>2d ago</p>
                </div>
                <div className='requests-details'>
                    <img src='requestprofile-icon2.png' alt='request-icon' className='requestprof-icon'/>
                    <p className='requester-name'>Brono</p>
                    <p className='requested-catagory2'>junior</p>
                    <p className='requested-date2'>1d ago</p>
                </div>
                <div className='requests-details'>
                    <img src='requestprofile-icon3.png' alt='request-icon' className='requestprof-icon'/>
                    <p className='requester-name'>Lang</p>
                    <p className='requested-catagory3'>senior</p>
                    <p className='requested-date3'>1d ago</p>
                </div>
                <div className='requests-details'>
                    <img src='requestprofile-icon4.png' alt='request-icon' className='requestprof-icon'/>
                    <p className='requester-name'>Kraig sn</p>
                    <p className='requested-catagory4'>junior</p>
                    <p className='requested-date4'>1d ago</p>
                </div>
                <div className='requests-details'>
                    <img src='requestprofile-icon5.png' alt='request-icon' className='requestprof-icon'/>
                    <p className='requester-name'>Ming pong</p>
                    <p className='requested-catagory5'>junior</p>
                    <p className='requested-date5'>48hr ago</p>
                </div>
                <div className='requests-details'>
                    <img src='requestprofile-icon6.png' alt='request-icon' className='requestprof-icon'/>
                    <p className='requester-name'>julia Seira</p>
                    <p className='requested-catagory6'>senior</p>
                    <p className='requested-date6'>1hr ago</p>
                </div>

          </div>
          <div className='notifications-card'>
                <div className='notifications-title'>
                   <h2>Notifications</h2>
                </div>
                <div className='notifications-header'>
                    <img src='notificationcontact-icon.png' alt='notification-icon' className='notification-icons1'/>
                    <button className='notification-btn'>Senior</button>
                    <img src='upanddown-icon.png' alt='notification-icon' className='notification-icons2'/>
                <div/>
                <div className='messages-textbar'>
                    <p className='notifications-messages'>write your notification here....</p>
                </div>
                <div className='footer-btn'>
                    <button className='message-btn'>Push</button>
                </div>
            </div>
          </div>
       </div>
    
  )
}

export default UserChart
