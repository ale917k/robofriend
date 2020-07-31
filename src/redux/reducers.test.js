import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";

import React from 'react';
import * as reducers from './reducers';
import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

describe('searchRobots reducer', () => {
    
    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
    });
});