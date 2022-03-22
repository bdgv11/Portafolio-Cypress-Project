/// <reference types="Cypress" />


class Utilities {

    getRandomEmail() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
        for (let i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return (text + "@test.com");
    }

    getRandomNumber() {
        let number = "";
        let possible = "0123456789";
    
        for (let i = 0; i < 8; i++)
        number += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return number;
    }

    getRandomPassword() {
        let pass = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*/-&$#@!";
    
        for (let i = 0; i < 10; i++)
        pass += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return pass;
    }
}

export const utilities = new Utilities();