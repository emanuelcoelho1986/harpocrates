import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

export default function () {
  return (
    <div className="app">
      <NavigationBar />
      <Outlet />
    </div>
  );
}
