import { NavLink } from 'react-router-dom';
import { AvailableRoutes } from '../routes/AvailableRoutes';

export default function () {
  return (
    <nav className="navigation-bar">
      <NavLink to={AvailableRoutes.HOME} data-test-route={AvailableRoutes.HOME}>Home</NavLink>
      <NavLink to={AvailableRoutes.GAME} data-test-route={AvailableRoutes.GAME}>Game</NavLink>
    </nav>
  );
}
