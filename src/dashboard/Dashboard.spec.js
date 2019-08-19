import React from 'react';
import renderer from 'react-test-renderer'
import { act } from 'react-dom/test-utils';

import Dashboard from './Dashboard'
import Controls from '../controls/Controls'
import Display from '../display/Display'

describe('<Dashboard />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />)
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('render Controls components ', () => {
        const tree = renderer.create(<Controls />)
        expect(tree.toJSON()).toMatchSnapshot();
    })

    it('render Display components ', () => {
        const tree = renderer.create(<Display />)
        expect(tree.toJSON()).toMatchSnapshot();
    })
});
