import React from 'react'
import './UserDataTable.css'

const UserDataTable = () => {
    const data = [
      {
        id: "#6546",
        name: "Mohammed Rashid",
        contact: "+91 9756566556",
        university: "Auckland University of Technology",
        location: "Indian",
        nationality: "Indian",
        status: "Blocked",
        
      },
      {
        id: "#6546",
        name: "Mohammed Rashid",
        contact: "+91 9756566556",
        university: "Auckland University of Technology",
        location: "Indian",
        nationality: "Indian",
        status: "Blocked",
      },
      {
        id: "#6546",
        name: "Mohammed Rashid",
        contact: "+91 9756566556",
        university: "Auckland University of Technology",
        location: "Indian",
        nationality: "Indian",
        status: "Blocked",
      },
      {
        id: "#6546",
        name: "Mohammed Rashid",
        contact: "+91 9756566556",
        university: "Auckland University of Technology",
        location: "Indian",
        nationality: "Indian",
        status: "Blocked",
      },
      {
        id: "#6546",
        name: "Mohammed Rashid",
        contact: "+91 9756566556",
        university: "Auckland University of Technology",
        location: "Indian",
        nationality: "Indian",
        status: "Blocked",
      },
      {
        id: "#6546",
        name: "Mohammed Rashid",
        contact: "+91 9756566556",
        university: "Auckland University of Technology",
        location: "Indian",
        nationality: "Indian",
        status: "Blocked",
      },
      {
        id: "#6546",
        name: "Mohammed Rashid",
        contact: "+91 9756566556",
        university: "Auckland University of Technology",
        location: "Indian",
        nationality: "Indian",
        status: "Blocked",
      },
    ];
  
    return (
      <div className="data-container">
        <table className="users-table">
          <thead className='table-header'>
            <tr>
              <th className='user-title'>
                <input type="checkbox" className='user-checkbox' />
              </th>
              <th className='user-title'>ID</th>
              <th className='user-title'>Junior</th>
              <th className='user-title'>Contact</th>
              <th className='user-title'>University</th>
              <th className='user-title'>Location</th>
              <th className='user-title'>Nationality</th>
              <th className='user-title'>Status</th>
            </tr>
          </thead>
          <tbody>
            
            {data.map((user, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" className='user-checkbox' />
                </td>
                <td className='table-data'>{user.id}</td>
                <td className='table-data'>{user.name}</td>
                <td className='table-data'>{user.contact}</td>
                <td className='table-data'>{user.university}</td>
                <td className='table-data'>{user.location}</td>
                <td className='table-data'>{user.nationality}</td>
                <td className='table-status'>
                  <span className="status-blocked">{user.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default UserDataTable
