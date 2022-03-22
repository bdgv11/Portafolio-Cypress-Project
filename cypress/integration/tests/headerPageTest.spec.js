/// <reference types="Cypress" />

import { headerPage } from "../page-objects/headerPage";

describe('Header Test Cases', () => {

    context('Header Page', () => {

        beforeEach(() => {
            headerPage.visit()
        })


        it('Change currency to EURO', () => {

            headerPage.clickOnCurrencyButton();
            headerPage.clickOnEuroCurrency();            

            cy.contains('€ Currency').should('be.visible');
        })

        it('Change currency to DOLLAR', () => {
            headerPage.clickOnCurrencyButton()
            headerPage.clickOnDollarCurrency()

            cy.contains('$ Currency').should('be.visible');
        })

        it('Change currency to POUND STERLING', () => {
            headerPage.clickOnCurrencyButton()
            headerPage.clickOnPoundCurrency()

            cy.contains('£ Currency').should('be.visible');
        })
    })
})