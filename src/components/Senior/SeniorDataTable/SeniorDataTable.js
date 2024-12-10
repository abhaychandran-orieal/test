import React from 'react'
import './SeniorDataTable.css'

const SeniorDataTable = () => {
    const data = [
      {
        id: "#6546",
        name: "Mohammed Rashid",
        contact: "+91 9756566556",
        university: "Auckland University of Technology",
        totalsessions:"5",
        totalpoints:"20000",
        totalEarnings:"20000",
        balancepayable:"20000",
        status: "Blocked",
        
      },
      {
        id: "#6546",
        name: "Mohammed Rashid",
        contact: "+91 9756566556",
        university: "Auckland University of Technology",
        totalsessions:"5",
        totalpoints:"20000",
        totalEarnings:"20000",
        balancepayable:"20000",
        status: "Blocked",
      },
      {
        id: "#6546",
        name: "Mohammed Rashid",
        contact: "+91 9756566556",
        university: "Auckland University of Technology",
        totalsessions:"5",
        totalpoints:"20000",
        totalEarnings:"20000",
        balancepayable:"20000",
        status: "Blocked",
      },
      {
        id: "#6546",
        name: "Mohammed Rashid",
        contact: "+91 9756566556",
        university: "Auckland University of Technology",
        totalsessions:"5",
        totalpoints:"20000",
        totalEarnings:"20000",
        balancepayable:"20000",
        status: "Blocked",
      },
      {
        id: "#6546",
        name: "Mohammed Rashid",
        contact: "+91 9756566556",
        university: "Auckland University of Technology",
        totalsessions:"5",
        totalpoints:"20000",
        totalEarnings:"20000",
        balancepayable:"20000",
        status: "Blocked",
      },
      {
        id: "#6546",
        name: "Mohammed Rashid",
        contact: "+91 9756566556",
        university: "Auckland University of Technology",
        totalsessions:"5",
        totalpoints:"20000",
        totalEarnings:"20000",
        balancepayable:"20000",
        status: "Blocked",
      },
      {
        id: "#6546",
        name: "Mohammed Rashid",
        contact: "+91 9756566556",
        university: "Auckland University of Technology",
        totalsessions:"5",
        totalpoints:"20000",
        totalEarnings:"20000",
        balancepayable:"20000",
        status: "Blocked",
      },
    ];
  
    return (
      <div className="senior-container">
        <table className="senior-table">
          <thead className='senior-header'>
            <tr>
              <th className='senior-title'>
                <input type="checkbox" className='user-checkbox' />
              </th>
              <th className='senior-title'>ID</th>
              <th className='senior-title'>Senior</th>
              <th className='senior-title'>Contact</th>
              <th className='senior-title'>University</th>
              <th className='senior-title'>Total Sessions</th>
              <th className='senior-title'>Total Points</th>
              <th className='senior-title'>Total Earnings</th>
              <th className='senior-title'>Balance payable</th>
              <th className='senior-title'>Status</th>
            </tr>
          </thead>
          <tbody>
            
            {data.map((user, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" className='user-checkbox' />
                </td>
                <td className='senior-data'>{user.id}</td>
                <td className='senior-data'>{user.name}</td>
                <td className='senior-data'>{user.contact}</td>
                <td className='senior-data'>{user.university}</td>
                <td className='senior-data'>{user.totalsessions}</td>
                <td className='senior-data'>{user.totalpoints}</td>
                <td className='senior-data'>{user.totalEarnings}</td>
                <td className='senior-data'>{user.balancepayable}</td>
                <td className='senior-status'>
                  <span className="senior-blocked">{user.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default SeniorDataTable
