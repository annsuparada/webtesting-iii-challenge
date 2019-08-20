import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';

import Display from './Display'



describe('<Display />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Display />)
        expect(tree.toJSON()).toMatchSnapshot();
    });
});

describe('test props Close ', () =>{
    it("displays 'Closed' if the `closed` prop is `true`", () => {
        const { getByText } = render(<Display closed={true} />)
        getByText(/closed/i)
    } )
    it("displays 'Open' if the `closed` prop is `false`", () => {
        const { getByText } = render(<Display open={false} />)
        getByText(/open/i)
    } )
})

describe('test Locked props', () => {
    it("displays 'Locked' if the `locked` prop is `true`", () => {
        const { getByText } = render(<Display locked={true} />)
        getByText(/locked/i)
    })
    it("displays 'Unlocked' if the `locked` prop is `false`", () => {
        const { getByText } = render(<Display unlocked={false} />)
        getByText(/unlocked/i)
    })
})

describe('red-led class test', () => {
    it("when `locked` use the `red-led` class", () =>{
        const { getByText } = render(<Display locked={true}/>)
        expect(getByText(/locked/i)).toHaveClass('red-led')
    })
    it("when `Closed` use the `red-led` class", () =>{
        const { getByText } = render(<Display closed={true}/>)
        expect(getByText(/closed/i)).toHaveClass('red-led')
    })
})

describe('green-led class test', () => {
    it("when `unlocked` use the `green-led` class", () => {
        const { getByText } = render(<Display unlocked={true} />)
        expect(getByText(/unlocked/i)).toHaveClass('green-led')
    })
    it("when `open` use the `green-led` class", () => {
        const { getByText } = render(<Display open={true} />)
        expect(getByText(/open/i)).toHaveClass('green-led')
    })
})