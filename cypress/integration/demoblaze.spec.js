/// <reference types="cypress" />
const { faker } = require("@faker-js/faker");
let radomName = faker.name.findName();
let radomCountry = faker.address.country();
let radomcityName = faker.address.cityName();
let radomMonth = faker.date.month({ context: true });
let radomYear = faker.date.future(10);
let radomCart = faker.finance.creditCardNumber("visa");

const users = require("../fixtures/credentials.json");
describe("test cases kate 2", () => {
  before("", () => {
    cy.visit("https://www.demoblaze.com/index.html");
    cy.url("include.text", "/index.html");
  });
  it.skip("creation de compte", () => {
    const user = users[0];
    cy.get("[data-target='#signInModal']").click();
    cy.wait(1000);
    cy.get("#sign-username").type(user.username);
    cy.get("#sign-password").type(user.password);
    cy.get("[onclick='register()']").click();
  });

  it("authentification au compte", () => {
    const user = users[0];
    cy.get("[data-target='#logInModal']").click();
    cy.get("#logInModal").should("be.visible");
    cy.wait(1000);
    cy.get("#loginusername").should("be.visible").type(user.username);
    cy.get("#loginpassword").should("be.visible").type(user.password);
    cy.get("[onclick='logIn()']").click();
  });

  it("achat d'un produit", () => {
    const user = users[0];
    cy.wait(2000);
    cy.get("[href='prod.html?idp_=6']").eq(0).click();
    cy.get("[onclick='addToCart(6)']").click();
    cy.on("window:alert", (texte) => {
      texte: "I am an alert box!";
    });
    cy.on("window:confirm", (texte) => true);
    cy.get("#cartur").should("be.visible").and("contain.text", "Cart");
    cy.get("#cartur", { force: true }).click();
    cy.url("include.text", "/cart.html");
    cy.get("[data-target='#orderModal']").should("be.visible").click();
    cy.get("#orderModalLabel")
      .should("be.visible")
      .and("include.text", "Place order");
    cy.get("#name").should("be.visible").type(radomName);
    cy.get("#country").should("be.visible").type(radomCountry);
    cy.get("#city").should("be.visible").type(radomcityName);
    cy.get("#card").should("be.visible").type(radomCart);
    cy.get("#month").should("be.visible").type(radomMonth);
    cy.get("#year").should("be.visible").type("2026");
    cy.get("[onclick = 'purchaseOrder()']", { timeout: 5000 }).click();
    cy.wait(5000);
    cy.get(".sweet-alert").should("be.visible");
    cy.get(".sweet-alert")
      .find("h2")
      .should("contain.text", "Thank you for your purchase!");
    cy.get(".sa-confirm-button-container").click();
  });
});
