import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Activity.css'
import Sidebar from './Sidebar';

import Navbar from './Navbar';

const Activity = ({ userData }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation()

  console.log(location.state.userData.userId)


  useEffect(() => {
    const fetchActivities = async () => {
      try {
        if (location.state.userData.userId == null ) {
          throw new Error('User data or user ID is undefined');
        }

        const response = await axios.post(
          'https://www.mypartydashboard.com/ActivityTrack/WebService/GetUserActivities',
          { userId: location.state.userData.userId }
        );

        if (response.data && response.data.activityList) {
          setActivities(response.data.activityList);
          setLoading(false);
        } else {
          throw new Error('No activities found');
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchActivities();
  }, [location.state.userData.userId]);

  if (loading) return <div className='loading-container'><p className='loading-text'>Loading activities...</p></div>
  if (error) return  <p>Error: {error}</p>;



  
  return (
    <div>
      <Navbar/><br/>
      <h2>User Activities</h2><br/>
      <table className="activity-table">        
      <thead>
          <tr>
            <th>Activity ID</th>
            <th>Activity Name</th>
            <th>Roles & Responsibilities</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={activity.activityId + index}>
              <td>{activity.activityId}</td>
              <td>{activity.activityName}</td>
              <td>{activity.rolesResponsibilities}</td>
              <td>{activity.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
    </div>
  );
};

export default Activity;



















// import React,{useState}from 'react';
// import { useLocation } from 'react-router-dom';
// import './Activity.css';
// import Navbar from './Navbar';


// const Activity = ({ userData }) => {

  

// const location = useLocation()
//   console.log(location.state.userData.activityList)
//   // userData=loaction.state.activityList
 
//     if(userData === null){
//     return (
//       <div>
//         <p>No activity data available.</p>
//       </div>
//     );
//     }else{
    
//   return (


// <div>
// <Navbar/>
//     <div className='Table-container'>
//       {/* <h2>Activity Data</h2> */}
//       <table>
//         <thead>
//           <tr>
//             <th>Activity ID</th>
//             <th>Activity Name</th>
//             <th>Roles & Responsibilities</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {location.state.userData.activityList.map((activity) => (
//             <tr key={activity.activityId}>
//               <td>{activity.activityId}</td>
//               <td>{activity.activityName}</td>
//               <td>{activity.rolesResponsibilities}</td>
//               <td>{activity.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>


     
//     </div>
//   );}
// };

// export default Activity;




