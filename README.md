# Portafolio-Cypress-Project
This is a repo for a Cypress project in order to show my skills with test automation. 

## Table of contents
* [About the project](#about-the-project)
* [Built with](#built-with)
* [Getting started](#getting-started)
     - [Prerequisites](#prerequisites)
     - [Installation](#installation)
* [Test Cases](#test-cases)


## About the project
This project is about the automation of a web page: http://opencart.abstracta.us/ using Cypress and Javascript.

## Built With
This project is created with:
* Programming Language: Javascript
* Cypress
* Page Object Model


## Getting started
## Prerequisites
You need to install NodeJS and NPM (Node Package Manager) and Cypress via `npm`. How?

- NodeJS : https://nodejs.org/es/download/
- NPM : https://www.npmjs.com/get-npm
- Cypress : https://www.cypress.io/

## Installation

Once you download the project you just need to run this command on your terminal:
     `npm run cy:open`

## Test Cases

Header page:
- Verify that header web elements (title, links, dropdowns) are displayed
- Verify links to Register or Login pages works from header dropdowns 
- Verify that when I change currency to $, €, £, the currency on the top is updated.

Register page:
- Verify that the Register page is displayed
- Verify that I can register a new user correctly
- Verify the error messages when I try to register a user with empty fields