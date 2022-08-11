import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import AvailableRoutesEnum from '../routes/AvailableRoutes.enum';

describe('<NavigationBar />', () => {
  const numberOfRoutesAvailable = Object.keys(AvailableRoutesEnum).length;
  let container: HTMLElement;

  beforeEach(() => {
    container = render(
      <BrowserRouter>
        <NavigationBar />
      </BrowserRouter>,
    ).container;
  });

  it('should render NavigationBar', () => {
    expect(container.getElementsByClassName('navigation-bar')).toHaveLength(1);
  });

  it(`should have the same number of links - 1 from AvailableRoutes: ${numberOfRoutesAvailable - 1}`, () => {
    expect(container.querySelectorAll('[data-test-route]').length).toBe(numberOfRoutesAvailable - 1);
  });

  it(`should have ${AvailableRoutesEnum.HOME} Link on Screen`, () => {
    const dataTestRouteValue = AvailableRoutesEnum.HOME;
    expect(container.querySelector(`[data-test-route="${dataTestRouteValue}"]`)).toBeVisible();
  });
});
