import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(<App />).container;
  });

  it('should render App', () => {
    expect(container.getElementsByClassName('app')).toHaveLength(1);
  });
});
