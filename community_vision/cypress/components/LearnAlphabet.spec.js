import React from 'react';
import { mount } from 'cypress-react-unit-test';
import LearnAlphabet from '../../src/Components/Games/LearnAlphabet';

describe('Learn Alphabet', () => {
    it('renders learn alphabet component', () => {
        mount(<LearnAlphabet />);
    })
})