/// <reference types="Cypress" />

import { registerPage } from "../page-objects/registerPage";
import { utilities } from "../utilities/utilities";


describe('Register Page - Tests', () => {

    context('Register a new user, error msgs', () => {

        beforeEach(() => {
            registerPage.visit()
        })
        

        it('Register a new user correctly, subscribe YES', () => {

            let pass = utilities.getRandomPassword();

            registerPage.typeFormRadioYES({
                firstName: 'Eddy',
                lastName: 'Fizzio',
                email: utilities.getRandomEmail(),
                telephone: utilities.getRandomNumber(),
                password: pass,
                passConfirm: pass
            })

            cy.contains('Thank you for registering with Your Store!').should('be.visible');
            cy.contains('You will be notified by e-mail once your account has been activated by the store owner.').should('be.visible');
            cy.contains('If you have ANY questions about the operation of this online shop, please contact the store owner.').should('be.visible');
        })

        it('Register a new user correctly, subscribe NO', () => {

            let pass = utilities.getRandomPassword();

            registerPage.typeFormRadioNO({
                firstName: 'Eddy',
                lastName: 'Fizzio',
                email: utilities.getRandomEmail(),
                telephone: utilities.getRandomNumber(),
                password: pass,
                passConfirm: pass
            })

            cy.contains('Thank you for registering with Your Store!').should('be.visible');
            cy.contains('You will be notified by e-mail once your account has been activated by the store owner.').should('be.visible');
            cy.contains('If you have ANY questions about the operation of this online shop, please contact the store owner.').should('be.visible');
        })

        it('Show error messages when try to register with empty fields', () => {

            let firstNameError = "First Name must be between 1 and 32 characters!"
            let lastNameError ="Last Name must be between 1 and 32 characters!"
            let emailError = "E-Mail Address does not appear to be valid!"
            let telephoneError = "Telephone must be between 3 and 32 characters!"
            let passwordError = "Password must be between 4 and 20 characters!"
            let warningError = " Warning: You must agree to the Privacy Policy!"

            registerPage.clickOnContinueButton();

            cy.contains(warningError).should('be.visible');
            cy.contains(firstNameError).should('be.visible');
            cy.contains(lastNameError).should('be.visible');
            cy.contains(emailError).should('be.visible');
            cy.contains(telephoneError).should('be.visible');
            cy.contains(passwordError).should('be.visible');
        })
    })
})