import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Activity.css'
import Navbar from './Navbar';

const Activity = ({ userData }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation()

  const user= JSON.parse(sessionStorage.getItem('useData'));

  console.log(user);
  const fetchActivities = async () => {
    try {
      if (sessionStorage.getItem('useData') == null ) {
        throw new Error('User data or user ID is undefined');
      }


      const response = await axios.post(
        'https://www.mypartydashboard.com/ActivityTrack/WebService/GetUserActivities',
        { userId: user.userId }
      );
      console.log(sessionStorage.getItem('useData').userId);
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

  useEffect(() => {
  

    if(sessionStorage.getItem('useData') !== null) {
      fetchActivities();
    }


     
  }, []);

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





// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import './Activity.css';
// import Navbar from './Navbar';
// import { useTable } from 'react-table';

// const Activity = ({ userData }) => {
//   const [activities, setActivities] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     let isMounted = true;

//     const fetchActivities = async () => {
//       try {
//         if (!location.state || !location.state.userData || !location.state.userData.userId) {
//           throw new Error('User data or user ID is undefined');
//         }

//         const response = await axios.post(
//           'https://www.mypartydashboard.com/ActivityTrack/WebService/GetUserActivities',
//           { userId: location.state.userData.userId }
//         );

//         if (isMounted) {
//           if (response.data && response.data.activityList) {
//             setActivities(response.data.activityList);
//             setLoading(false);
//             setError(null);
//           } else {
//             throw new Error('No activities found');
//           }
//         }
//       } catch (error) {
//         if (isMounted) {
//           setError(error.message);
//           setLoading(false);
//         }
//       }
//     };

//     fetchActivities();

//     return () => {
//       isMounted = false;
//     };
//   }, [location.state]);

//   const columns = [
//     {
//       Header: 'Activity ID',
//       accessor: 'activityId',
//     },
//     {
//       Header: 'Activity Name',
//       accessor: 'activityName',
//     },
//     {
//       Header: 'Roles & Responsibilities',
//       accessor: 'rolesResponsibilities',
//     },
//     {
//       Header: 'Status',
//       accessor: 'status',
//     },
//   ];

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable({ columns, data: activities });

//   if (loading) return <div className='loading-container'><p className='loading-text'>Loading activities...</p></div>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <Navbar/><br/>
//       <h2>User Activities</h2><br/>
//       <table className="activity-table" {...getTableProps()}>        
//         <thead>
//           {headerGroups.map(headerGroup => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map(row => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map(cell => {
//                   return (
//                     <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <br/>
//     </div>
//   );
// };

// export default Activity;
