import React from 'react'
import './DashboardSideBar.css'

function DashboardSideBar() {
    return (
        <div className='dashboard-sidebar'>
        <div className='sidebar-container'>
          <div className='sidebar-logo-container'>
            <img src="sidebar-logo.png "alt='sidebarlogo'className='sidebar-logo'/>
          </div>
          <div className='content'>
             <div class="menu-item">
                 <img src="sidebar-icon1.png" alt="dasnboard-Icon" class="icons"/>
                 <h3>Dashboard</h3>
             </div>
             <div class="menu-item">
                 <img src="sidebar-icon2.png" alt="juniors-Icon" class="icons"/>
                 <h3>Juniors</h3>
             </div>
             <div class="menu-item">
                 <img src="sidebar-icon3.png" alt="senior-Icon" class="icons"/>
                 <h3>Seniors</h3>
             </div>
             <div class="menu-item">
                 <img src="sidebar-icon4.png" alt="schedules-Icon" class="icons"/>
                 <h3>Schedules</h3>
             </div>
             <div class="menu-item">
                 <img src="sidebar-icon5.png" alt="feedbacks-Icon" class="icons"/>
                 <h3>Feedbacks</h3>
             </div>
             <div class="menu-item">
                 <img src="sidebar-icon6.png" alt="reports-Icon" class="icons"/>
                 <h3>Reports</h3>
             </div>
             <div class="menu-item">
                 <img src="sidebar-icon7.png" alt="settings-Icon" class="icons"/>
                 <h3>Settings</h3>
             </div>
          </div>
        </div>
      </div>
       )
     }
export default DashboardSideBar
