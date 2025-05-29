import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';  // Import Redux helpers
import axios from 'axios';                                         // Import Axios for API requests

// Async function to fetch traffic data from backend
export const fetchTraffic = createAsyncThunk('traffic/fetchTraffic', async () => {
  const res = await axios.get('http:/localhost:5000/api/traffic');
  return res.data;
});

const trafficSlice = createSlice({
  name: 'traffic',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTraffic.pending, (state) => {
        state.status = 'loading';                   // Set status when loading
      })
      .addCase(fetchTraffic.fulfilled, (state, action) => {
        state.status = 'succeeded';                // Set status when succeeded
        state.data = action.payload;               // Save the fetched data in state
      });
  },
});

export default trafficSlice.reducer;