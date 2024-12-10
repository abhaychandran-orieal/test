import React from 'react'
import './SessionHistory.css'





function SessionHistory() {
  return (
    <div className='session-history'>
          <div className='history-title'>
              <h4>Session History of Mohammed Naeem</h4>
          </div>
          
          <div className='history-cards'>
              <div className='history-data'>
                  <h5 className='history-name'>Muhammed Ajmal</h5>
              </div>
              <div class="section-history">
                  <p className='history-details'>
                      <img src="location-icon.png" alt="Location Icon" class="history-icon" />
                      Germany
                  </p>
                  <p className='history-details'>
                      <img src="calendar-icon.png" alt="Calendar Icon" class="history-icon" />
                      12-10-2023 | 09:30 to 10:30
                  </p>
                  <p className='history-details'>
                      <img src="clock-icon.png" alt="Clock Icon" class="history-icon" />
                      30 Min
                  </p>
              </div> 
              <div className='session-rating'>
                <p className='section-rating'>Session Rating by Student:</p>
                <img src="rating-icon.png"alt='ration-icon'className='rating-icon'/>
              </div>
              <div  className='points-card'>
                  <div className="card-gained">
                    <p className="points">104.4 <span>Points</span></p>
                    <p className="status">Gained</p>
                  </div>
                  <div className="card-earned">
                    <p className="points">104.4 <span>Points</span></p>
                    <p className="status">Earned</p>
                  </div>
                  <div className="card-paid">
                    <p className="paid-points">104.4 <span className='points-span'>Points</span></p>
                    <p className="paid-status">Paid</p>
                  </div>
              </div>
          
          </div>
          <div className='history-card'>
              <div className='history-datas'>
                  <h5 className='history-names'>Muhammed Ajmal</h5>
              </div>
              <div class="section-historys">
                  <p className='history-detail'>
                      <img src="location-icon.png" alt="Location Icon" class="history-icons" />
                      Germany
                  </p>
                  <p className='history-detail'>
                      <img src="calendar-icon.png" alt="Calendar Icon" class="history-icons" />
                      12-10-2023 | 09:30 to 10:30
                  </p>
                  <p className='history-detail'>
                      <img src="clock-icon.png" alt="Clock Icon" class="history-icons" />
                      30 Min
                  </p>
              </div> 
              <div className='session-ratings'>
                <p className='section-ratings'>Session Rating by Student:</p>
                <img src="rating-icon.png"alt='ration-icon'className='rating-icons'/>
              </div>
              <div  className='points-cards'>
                  <div className="card-gaineds">
                    <p className="point">104.4 <span>Points</span></p>
                    <p className="statuss">Gained</p>
                  </div>
                  <div className="card-earneds">
                    <p className="point">104.4 <span>Points</span></p>
                    <p className="statuss">Earned</p>
                  </div>
                  <div className="card-paids">
                    <p className="paid-point">104.4 <span className='points-span'>Points</span></p>
                    <p className="paid-statuss">Paid</p>
                  </div>
              </div>
          
          </div>
          
    </div>
            )
          }
export default SessionHistory