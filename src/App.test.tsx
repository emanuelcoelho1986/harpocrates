import { render, screen } from '@testing-library/react'

import App from './App';

describe('<App />', () => {
    beforeEach(() => {
        render(<App />);
    });

    it('should render App with default values', () => {
        expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument();
    })
})