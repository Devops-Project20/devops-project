describe("Job Search Frontend", () => {
  let baseUrl;

  before(() => {
    cy.task("startServer").then((url) => {
      baseUrl = url;
      cy.visit(baseUrl);
    });
  });

  after(() => {
    return cy.task("stopServer");
  });

  it("should search for a job by title", () => {
    cy.get("#keyword").type("Test Job Title", { force: true });
    cy.get("button").contains("Search").click();
    cy.get("#job-listings").should('be.visible'); // Ensure job listings are visible
    cy.get("#job-listings").contains("Test Job Title").should("exist");
  });

  it("should search for a job by company name", () => {
    cy.get("#keyword").should('be.visible').clear().type("Test Company", { force: true });
    cy.get("button").contains("Search").click();
    cy.get("#job-listings").should('be.visible');
    cy.get("#job-listings").contains("Test Company").should("exist");
  });

  it("should search for a job by location", () => {
    cy.get("#keyword").should('be.visible').clear().type("Test Location", { force: true });
    cy.get("button").contains("Search").click();
    cy.get("#job-listings").should('be.visible');
    cy.get("#job-listings").contains("Test Location").should("exist");
  });

  it("should display no results for a non-existent job", () => {
    cy.get("#keyword").should('be.visible').clear().type("NonExistentJob", { force: true });
    cy.get("button").contains("Search").click();
    cy.get("#job-listings").should('be.visible');
    cy.get("#job-listings").contains("No job listings found.").should("exist");
  });
});
