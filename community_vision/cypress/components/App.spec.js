import React from 'react';
import { mount } from 'cypress-react-unit-test';
import App from '../../src/App';

describe('App', () => {
    it('renders App component', () => {
        mount(<App />);
    })
})