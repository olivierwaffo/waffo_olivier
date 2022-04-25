/// <reference types="cypress"/>
describe("Suite de test de demo", () => {
  specify("Scénario de demo", () => {
    cy.log("I am here");
    cy.visit("/html/index.html");
  });
});
