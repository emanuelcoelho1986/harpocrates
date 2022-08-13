import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { AvailableRoutes } from '../routes/AvailableRoutes';

describe('<NavigationBar />', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(
      <BrowserRouter>
        <NavigationBar />
      </BrowserRouter>,
    ).container;
  });

  it('should render App', () => {
    const numberOfRoutesMinusNotFound = Object.keys(AvailableRoutes).length - 1;
    expect(container.getElementsByClassName('navigation-bar')).toHaveLength(1);
  });

  it(`should have ${AvailableRoutes.HOME} Link on Screen`, () => {
    const dataTestRouteValue = AvailableRoutes.HOME;
    expect(container.querySelector(`[data-test-route="${dataTestRouteValue}"]`)).toBeVisible();
  });
});
