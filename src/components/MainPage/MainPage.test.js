import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";

import React from 'react';
import MainPage from './MainPage';

describe('MainPage', () => {
    let wrapper;
    beforeEach(() => {
        const mockProps = {
            onRequestRobots: jest.fn(),
            onSearchChange: jest.fn(),
            robots: [],
            searchField: '',
            isPending: false
        };
        wrapper = shallow(<MainPage {...mockProps} />)
    });

    it('expects to match Snapshot Object', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should filter robots correctly', () => {
        const mockProps2 = {
            onRequestRobots: jest.fn(),
            onSearchChange: jest.fn(),
            robots: [{
                id: 3,
                name: 'John',
                email: 'john@gmail.com'
            }],
            searchField: 'john',
            isPending: false
        };
        const wrapper2 = shallow(<MainPage {...mockProps2} />)

        expect(wrapper).toEqual({});

        // expect(wrapper2.instance()).toEqual([{
        //     id: 3,
        //     name: 'John',
        //     email: 'john@gmail.com'
        // }]);
    });
});