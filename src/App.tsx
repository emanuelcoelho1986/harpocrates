import React from 'react';
import { BrowserRouter, Outlet } from 'react-router-dom';

import AvailableRoutes from 'routes/AvailableRoutes';
import NavigationBar from './components/NavigationBar';

import './index.css';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AvailableRoutes />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
