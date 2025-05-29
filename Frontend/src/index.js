import React from 'react';                       // React library
import ReactDOM from 'react-dom/client';         // ReactDOM to render app
import App from './App';                         // Main app component
import { Provider } from 'react-redux';          // Redux provider
import store from './redux/store';               // Redux store

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root element
root.render(
  // Provide store to all components
  <Provider store={store}>                      
    <App />                                    
  </Provider>
);