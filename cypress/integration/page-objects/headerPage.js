/// <reference types="Cypress" />

class HeaderPage {

    url = "/";

    //Web elements

    elements = {

            getCurrencyButton : () => cy.get('button[class="btn btn-link dropdown-toggle"]'),
            getEuroButton : () => cy.contains('button[class="currency-select btn btn-link btn-block"][name="EUR"]','Euro'),
            getDollarButton : () => cy.contains('button[class="currency-select btn btn-link btn-block"][name="USD"]','Dollar'),
            getPoundButton : () => cy.contains('button[class="currency-select btn btn-link btn-block"][name="GBP"]','Pound'),
    }

    //Methods

    visit(){
        cy.visit(this.url)
    } 

    clickOnCurrencyButton() {
        this.elements.getCurrencyButton().click();        
    }

    clickOnEuroCurrency() {
        this.elements.getEuroButton().click();
    }

    clickOnDollarCurrency() {
        this.elements.getDollarButton().click();
    }

    clickOnPoundCurrency(){
        this.elements.getPoundButton().click();
    }

}

export const headerPage = new HeaderPage();