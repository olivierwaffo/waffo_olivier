/// <reference types="cypress"/>
const { faker } = require("@faker-js/faker");
let radomName = faker.name.findName();
let radomTel = faker.phone.phoneNumber();
let radomEmail = faker.internet.email();
let radomLoren = faker.lorem.paragraph();
let radomCity = faker.address.city();
describe("acces main page index file ", () => {
  it("Verifier les questions et réponses", () => {
    cy.visit("/HTML/index.html");
  });
});
describe("Suite de test QCM Challenge", () => {
  it("Verifier les questions et réponses", () => {
    cy.get("[data-cy='Q1']").should(
      "contain.text",
      "Q1: Quelle est la capitale du Cameroun ?"
    );
    cy.get("[data-cy='bamako']")
      .should("be.visible")
      .and("contain.text", "Bamako");
    cy.get("[data-cy='yaounde']")
      .should("be.visible")
      .and("contain.text", "Yaoundé");
    cy.get("[data-cy='abidjan']")
      .should("be.visible")
      .and("contain.text", "Abidjan");
    cy.get("[data-cy='respQ1']").should("be.visible").and("contain.text", ".");

    cy.get("[data-cy='Q2']").should(
      "contain.text",
      "Q2: Quelles villes font parties d'un même pays?"
    );
    cy.get("[data-cy='ville_1']")
      .should("be.visible")
      .and("contain.text", "Douala");
    cy.get("[data-cy='ville_2']")
      .should("be.visible")
      .and("contain.text", "Djamena");
    cy.get("[data-cy='ville_3']")
      .should("be.visible")
      .and("contain.text", "Garoua");
    cy.get("[data-cy='respQ2']").should("be.visible").and("contain.text", ".");
    cy.get("[data-cy='Q3']").should(
      "contain.text",
      "Quelle équipe de football est championne du monde en 2018?"
    );
    cy.get("[data-cy='pays']")
      .select("france")
      .should("contain.text", "France");
    cy.get("[data-cy='pays']")
      .select("algerie")
      .should("contain.text", "Algerie");
    cy.get("[data-cy='pays']")
      .select("espagne")
      .should("contain.text", "Espagne");
    cy.get("[data-cy='pays']")
      .select("allemagne")
      .should("contain.text", "Allemagne");
    cy.get("[data-cy='pays']")
      .select("bresil")
      .should("contain.text", "Bresil");
    cy.get("[data-cy='respQ3']").should("be.visible").and("contain.text", ".");

    cy.get("[data-cy='pays']")
      .select("france")
      .should("contain.text", "France");
    cy.get("[data-cy='pays']")
      .select("algerie")
      .should("contain.text", "Algerie");
    cy.get("[data-cy='pays']")
      .select("espagne")
      .should("contain.text", "Espagne");
    cy.get("[data-cy='pays']")
      .select("allemagne")
      .should("contain.text", "Allemagne");
    cy.get("[data-cy='pays']")
      .select("bresil")
      .should("contain.text", "Bresil");
  });

  it("verifier les bonnes réponses aux questions", () => {
    cy.visit("/HTML/index.html");
    cy.get("[data-cy='Q1Resp_2']").click();
    cy.get("[data-cy='respQ1']").should("contain.text", "VRAI");
    cy.get("[data-cy='Q2Resp_1']").check().should("be.checked");
    cy.get("[data-cy='Q2Resp_3']").check().should("be.checked");
    cy.get("[data-cy='btnResp_2']").click();
    cy.get("[data-cy='respQ2']").should("contain.text", "VRAI");
    cy.get("[data-cy='pays']")
      .select("france")
      .should("contain.text", "France");
    cy.get("[data-cy='btnResp_3']").click();
    cy.get("[data-cy='respQ3']").should("contain.text", "VRAI");
  });

  it("verifier les mauvaises réponses aux questions", () => {
    cy.visit("/HTML/index.html");
    cy.get("[data-cy='Q1Resp_1']").click();
    cy.get("[data-cy='respQ1']").should("contain.text", "FAUX");
    cy.get("[data-cy='Q2Resp_1']").check().should("be.checked");
    cy.get("[data-cy='Q2Resp_2']").check().should("be.checked");
    cy.get("[data-cy='btnResp_2']").click();
    cy.get("[data-cy='respQ2']").should("contain.text", "FAUX");
    cy.get("[data-cy='pays']")
      .select("espagne")
      .should("contain.text", "Espagne");
    cy.get("[data-cy='btnResp_3']").click();
    cy.get("[data-cy='respQ3']").should("contain.text", "FAUX");
  });
});

describe("Suite de test Form challenge", () => {
  it("check labels", () => {
    cy.get("[data-cy='formBtn']").click;
    cy.get(".div-form").invoke("removeAttr", "hidden");
    //cy.get(".div-qcm").invoke("have.attr", "hidden");
    cy.get("[data-cy='form_title']").should("contain.text", "FORM CHALLENGE");
    cy.get("[data-cy='label_titre']").should("contain.text", "Titre : ");
    cy.get("[data-cy='label_objet']").should("contain.text", "Objet : ");
    cy.get("[data-cy='label_name']").should("contain.text", "Nom complet");
    cy.get("[data-cy='label_email']").should("contain.text", "Email addresse");
    cy.get("[data-cy='label_tel']").should(
      "contain.text",
      "Numéro de téléphone"
    );
    cy.get("[data-cy='label_adress']").should(
      "contain.text",
      "Address complète"
    );
    cy.get("[data-cy='label_msg']").should(
      "contain.text",
      "Message en une ligne"
    );
  });

  it("remplir le formulaire", () => {
    cy.get("[data-cy='titre']").select("Mme").should("contain.text", "Mme");
    cy.get("[data-cy='reclamation']").click();
    cy.get("[data-cy='name']").should("be.visible").type(radomName);
    cy.get("[data-cy='email']").should("be.visible").type(radomEmail);
    cy.get("[data-cy='tel']").should("be.visible").type(radomTel);
    cy.get("[data-cy='adress']").should("be.visible").type(radomCity);
    cy.get("[data-cy='msg']").should("be.visible").type(radomLoren);
    cy.get("[data-cy='valider']").click();
    cy.get("[data-cy='formAlert']").should(
      "contain.text",
      "Votre demande a été validé"
    );
  });
});
