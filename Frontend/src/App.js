import React, { useEffect } from 'react';         // Import React and hooks
import Dashboard from './components/Dashboard';   // Import Dashboard component
import { useDispatch } from 'react-redux';        // Hook to dispatch actions
import { fetchTraffic } from './redux/trafficSlice';  // Import action to fetch traffic

function App() {
  const dispatch = useDispatch();                // Get dispatch function

  useEffect(() => {
    dispatch(fetchTraffic());                   // Dispatch fetchTraffic on component mount
  }, [dispatch]);

  return <Dashboard />;                          // Render Dashboard
}

export default App;