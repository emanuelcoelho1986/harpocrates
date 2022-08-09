import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "routes/Routes";
import NavigationBar from './components/NavigationBar';

import "./index.css";
import './App.css';



function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <NavigationBar />
        <Routes />
        <div className="app" />
      </BrowserRouter>
    </React.StrictMode>  
  )
}

export default App
