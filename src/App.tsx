import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AvailableRoutes from 'routes/AvailableRoutes';

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
