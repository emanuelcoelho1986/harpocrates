import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import UserNameDialog from "./UserNameDialog";

describe('<UserNameDialog />', () => {
    let container: HTMLElement;

    beforeEach(() => {
        container = render(
            <UserNameDialog
                didPressButton={() => {}}
                isOpen={true}
                shouldCloseDialog={() => {}} />
        ).container;
    });

    it('should render UserNameDialog', () => {
        expect(container.getElementsByTagName('dialog')).toHaveLength(1);
    });
});
