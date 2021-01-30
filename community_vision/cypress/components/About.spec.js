import React from 'react';
import { mount } from 'cypress-react-unit-test';
import About from '../../src/Components/About';

describe('About Page Test', () => {
    const P = "* we value individuals * value whole lives * we begin with \"yes\" " + 
        "* we are future-oriented * we value independence * we value expanding the conversation * " + 
        "we value community * we value callaboration * we value innovation *";
    
    const P1 = "We work with natural support systems including an individual’s family, friends, " +
        "and local community to build a network that provides the means for an individual " +
        "to be a valued and contributing member of their community."

    const P2 = "Our work is rooted in the belief that all people, regardless of perceived ability, " +
        "deserve the freedom to make the basic choices that define their lives. We offer a " +
        "variety of services to provide the tools for people to live as independently as " +
        "possible, while pursuing their goals and dreams. These services include: supported " +
        "living, employment services, financial education and savings plans, affordable housing " +
        "resources, family support, and assistive technology consultations and training."

    const P3 = "Visit our webpage:";

    const P4 = "https://cvision.org/";

    it('Renders the About Page', () => {
        mount(<About />);
        cy.contains('At Community Vision').should('be.visible');
        cy.contains(P).should('be.visible');
        cy.contains(P1).should('be.visible');
        cy.contains(P2).should('be.visible');
        cy.contains(P3).should('be.visible');
        cy.contains(P4).should('be.visible');
    })
})