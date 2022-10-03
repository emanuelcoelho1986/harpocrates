import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from "../components/NavigationBar/NavigationBar";

export default function PageContainer() {
  return (
    <div className="app">
      <NavigationBar />
      <Outlet />
    </div>
  );
}
