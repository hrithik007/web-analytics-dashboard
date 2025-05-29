import { configureStore } from '@reduxjs/toolkit';   // Import Redux toolkit
import trafficReducer from './trafficSlice';         // Import traffic reducer

const store = configureStore({
  reducer: {
    traffic: trafficReducer,                        // Register reducer
  },
});

export default store;
