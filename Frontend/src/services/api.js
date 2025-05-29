import axios from 'axios';   // Import axios

// Function to send traffic data to backend
export const collectTraffic = async () => {
  return axios.post('http://localhost:5000/api/collect');
};
