import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard';


describe('<Dashboard />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />)
        expect(tree.toJSON()).toMatchSnapshot();
    });
    it('renders controls and displays', () => {
        const { getByText } = render(<Dashboard />);
        getByText(/unlocked/i)
        getByText(/open/i)
        getByText(/lock gate/i)
        getByText(/close gate/i)
     }) 
});
