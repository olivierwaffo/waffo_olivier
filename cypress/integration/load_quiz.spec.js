/// <reference types="cypress"/>
describe("Suite de test de demo", () => {
  it("Verifier les questions et réponses", () => {
    cy.visit("/HTML/index.html");
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
    cy.get("[data-cy='respQ1']")
      .should("be.visible")
      .and("contain.text", "xxxx");

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
    cy.get("[data-cy='respQ2']")
      .should("be.visible")
      .and("contain.text", "xxxx");
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
      .select("brazil")
      .should("contain.text", "Brazil");
    cy.get("[data-cy='respQ3']")
      .should("be.visible")
      .and("contain.text", "xxxx");
  });
  it("verifier les bonnes réponses aux questions", () => {
    cy.visit("/HTML/index.html");
    cy.get("[data-cy='Q1Resp_2']").click();
    cy.get("[data-cy='respQ1']").should("contain.text", "VRAI");
    cy.get("[data-cy='Q2Resp_1']").check().should("be.checked");
    cy.get("[data-cy='Q2Resp_3']").check().should("be.checked");
    cy.get("[data-cy='btnResp_2']").click();
    cy.get("[data-cy='respQ2']").should("contain.text", "VRAI");
  });

  it("verifier les mauvaises réponses aux questions", () => {
    cy.visit("/HTML/index.html");
    cy.get("[data-cy='Q1Resp_1']").click();
    cy.get("[data-cy='respQ1']").should("contain.text", "FAUX");
    cy.get("[data-cy='Q2Resp_1']").check().should("be.checked");
    cy.get("[data-cy='Q2Resp_2']").check().should("be.checked");
    cy.get("[data-cy='btnResp_2']").click();
    cy.get("[data-cy='respQ2']").should("contain.text", "FAUX");
  });
});
