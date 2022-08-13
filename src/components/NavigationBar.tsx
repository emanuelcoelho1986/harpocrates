import React from 'react';
import { NavLink } from 'react-router-dom';
import AvailableRoutesEnum from '../routes/AvailableRoutes.enum';

export default function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <NavLink
        to={AvailableRoutesEnum.HOME}
        data-test-route={AvailableRoutesEnum.HOME}
      >
        Home
      </NavLink>
      <NavLink
        to={AvailableRoutesEnum.GAME}
        data-test-route={AvailableRoutesEnum.GAME}
      >
        Game
      </NavLink>
    </nav>
  );
}
