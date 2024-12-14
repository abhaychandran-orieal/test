import React from 'react'
import './DashboardDataBar.css'

function DashboardDataBar() {
  return (
    <div className='databar'>
        
            <div className='website-views'>
                <p className='databar-title'>Website Views</p>
                <p className='databar-count'>7,265</p>
                <p className='databar-percentage'>+11.01%</p>
                <img src='databar-uparrow-icon.png' alt='up-arrow' className='databar-icon'/>
            </div>
            <div className='seniors-view'>
                <p className='databar-title'>seniors</p>
                <p className='databar-count'>3,671</p>
                <p className='databar-percentage'>-0.03%</p>
                <img src='databar-downarrow-icon.png' alt='down-arrow' className='databar-icon'/>
            </div>
            <div className='juniors-views'>
                <p className='databar-title'>Juniors</p>
                <p className='databar-count'>156</p>
                <p className='databar-percentage'>+15.03%</p>
                <img src='databar-uparrow-icon.png' alt='up-arrow' className='databar-icon'/>
            </div>
            <div className='active-users-views'>
                <p className='databar-title'>Active Users</p>
                <p className='databar-count'>2,318</p>
                <p className='databar-percentage'>+6.08%</p>
                <img src='databar-uparrow-icon.png' alt='up-arrow' className='databar-icon'/>
            </div>
        
      
    </div>
  )
}

export default DashboardDataBar
