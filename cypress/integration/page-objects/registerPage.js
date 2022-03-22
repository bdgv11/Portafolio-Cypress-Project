/// <reference types="Cypress" />

class RegisterPage {

    url = "/index.php?route=account/register";

    //Web elements

    elements = {

        getAccountTitlePage : () => cy.get('div[id="content"] > h1'),
        getFirstNameField : () => cy.get('[id="input-firstname"]'),
        getLastNameField : () => cy.get('[id="input-lastname"]'),
        getEmailField : () => cy.get('[id="input-email"]'),
        getTelephoneField : () => cy.get('[id="input-telephone"]'),
        getPasswordField : () => cy.get('[id="input-password"]'),
        getPassConfirm : () => cy.get('[id="input-confirm"]'),
        getRadioButtonNO : () => cy.get('[type="radio"][value="0"][name="newsletter"]'),
        getRadioButtonYES : () => cy.get('[type="radio"][value="1"][name="newsletter"]'),
        getAgreeCheckBox : () => cy.get('[type="checkbox"][name="agree"]'),
        getContinueButton : () => cy.get('[type="submit"][value="Continue"]')

    }

    // Methods

    visit(){
        cy.visit(this.url)
    }

    typeFormRadioNO({firstName = '', lastName = '', email = '', telephone = '', password = '', passConfirm = ''} = {}){
        this.elements.getFirstNameField().type(firstName);
        this.elements.getLastNameField().type(lastName);
        this.elements.getEmailField().type(email);
        this.elements.getTelephoneField().type(telephone);
        this.elements.getPasswordField().type(password);
        this.elements.getPassConfirm().type(passConfirm);
        this.elements.getRadioButtonNO().check();
        this.elements.getAgreeCheckBox().check();
        this.elements.getContinueButton().click();
    }

    typeFormRadioYES({firstName = '', lastName = '', email = '', telephone = '', password = '', passConfirm = ''} = {}){
        this.elements.getFirstNameField().type(firstName);
        this.elements.getLastNameField().type(lastName);
        this.elements.getEmailField().type(email);
        this.elements.getTelephoneField().type(telephone);
        this.elements.getPasswordField().type(password);
        this.elements.getPassConfirm().type(passConfirm);
        this.elements.getRadioButtonYES().check();
        this.elements.getAgreeCheckBox().check();
        this.elements.getContinueButton().click();
    }

    clickOnContinueButton(){
        this.elements.getContinueButton().click();
    }
}

export const registerPage = new RegisterPage();