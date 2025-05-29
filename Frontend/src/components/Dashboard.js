import React from 'react';                        // Import React
import { useSelector } from 'react-redux';        // Hook to access Redux state

const Dashboard = () => {
  const traffic = useSelector((state) => state.traffic.data);  // Get traffic data from state

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Web Traffic Dashboard</h2>
      <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}>
        Total Visits: <span style={{ color: '#007bff' }}>{traffic.length}</span>
      </p>
  
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Date</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Day</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Time</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>IP Address</th>
          </tr>
        </thead>
        <tbody>
          {traffic.map((entry) => {
            const dateObj = new Date(entry.timestamp);
            const date = dateObj.toLocaleDateString();
            const day = dateObj.toLocaleDateString(undefined, { weekday: 'long' });
            const time = dateObj.toLocaleTimeString();
  
            return (
              <tr key={entry.id} style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{date}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{day}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{time}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontFamily: 'monospace' }}>{entry.ip}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
  
}

export default Dashboard;
