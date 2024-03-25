// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const SpreadsheetData = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('https://script.google.com/macros/s/AKfycbzedyJ1YyHaG4d0KB7XiuS7Uo5m4Rh0Ar_Saplj_xWgfW5jX4QXvI2L4iUeW2v18_9z/exec')
//       .then(response => {
//         setData(response.data.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data: ', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Spreadsheet Data</h1>
//       <table>
//         {/* <thead>
//           <tr>
//             <th>ID</th>
//             <th>Date</th>
//             <th>CID</th>
//             <th>Constituency</th>
//             <th>Social Media Manager</th>
//             <th>Attended</th>
//             <th>Media Manager</th>
//             <th>Attended_1</th>
//             <th>Political Manager</th>
//             <th>Attended_3</th>
//             <th>Administrative Manager</th>
//             <th>Attended_4</th>
//           </tr>
//         </thead> */}
//         <tbody>
//           {data.map(row => (
//             <tr key={row.id}>
//               <td>{row.id}</td>
//               <td>{row.date}</td>
//               <td>{row.CID}</td>
//               <td>{row.Constituency}</td>
//               <td>{row['Social Media Manager']}</td>
//               <td>{row.Attended}</td>
//               <td>{row['Media Manager']}</td>
//               <td>{row.Attended_1}</td>
//               <td>{row['Political Manager']}</td>
//               <td>{row.Attended_3}</td>
//               <td>{row['Administrative Manager']}</td>
//               <td>{row.Attended_4}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SpreadsheetData;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://script.google.com/macros/s/AKfycbwweBWjik4P_4Xyu5LiZbzfrCT-mMvo3S7dh3UVQRNZQRUzjC2dX_ZKnolN_1CuKEb9/exec');
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleUpdate = async (rowIndex, newData) => {
    try {
      await axios.get('https://script.google.com/macros/s/AKfycbyaNXs3kc2d4dZ0Hvwn25_weUvM1_uC2c6tA6cpmo-rTOvUmS1F27QqiYZJGWaXPnPD/exec?action=update&rowIndex=' + rowIndex + '&newData=' + newData);
      fetchData(); // Refresh data after update
    } catch (error) {
      console.error('Error updating data: ', error);
    }
  };
  

  const handleDelete = async (rowIndex) => {
    try {
      await axios.get('https://script.google.com/macros/s/AKfycbwweBWjik4P_4Xyu5LiZbzfrCT-mMvo3S7dh3UVQRNZQRUzjC2dX_ZKnolN_1CuKEb9/exec?action=delete&rowIndex=' + rowIndex);
      fetchData(); // Refresh data after delete
    } catch (error) {
      console.error('Error deleting data: ', error);
    }
  };

  const handleFilter = async (date) => {
    try {
      let url = 'https://script.google.com/macros/s/AKfycbyaNXs3kc2d4dZ0Hvwn25_weUvM1_uC2c6tA6cpmo-rTOvUmS1F27QqiYZJGWaXPnPD/exec';
      if (date) {
        url += '?date=' + date;
      }
      const response = await axios.get(url);
      setFilteredData(response.data.data);
    } catch (error) {
      console.error('Error filtering data: ', error);
    }
  };
  

  return (
    <div>
      <h1>Spreadsheet Data</h1>
      <input type="text" placeholder="Enter date (e.g., 2022-01-01)" onChange={(e) => handleFilter(e.target.value)} />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>CID</th>
            <th>Constituency</th>
            <th>Social Media Manager</th>
            <th>Attended</th>
            <th>Media Manager</th>
            <th>Attended_1</th>
            <th>Political Manager</th>
            <th>Attended_3</th>
            <th>Administrative Manager</th>
            <th>Attended_4</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((row, index) => (
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.CID}</td>
                <td>{row.Constituency}</td>
                <td>{row['Social Media Manager']}</td>
                <td>{row.Attended}</td>
                <td>{row['Media Manager']}</td>
                <td>{row.Attended_1}</td>
                <td>{row['Political Manager']}</td>
                <td>{row.Attended_3}</td>
                <td>{row['Administrative Manager']}</td>
                <td>{row.Attended_4}</td>
                <td>
                  <button onClick={() => handleUpdate(index, 'newData')}>Update</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="12">No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
