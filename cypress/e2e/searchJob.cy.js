describe("Job Search Frontend", () => {
  let baseUrl;

  before(() => {
    cy.task("startServer").then((url) => {
      baseUrl = url; // Store the base URL
      cy.visit(baseUrl);
    });
  });

  after(() => {
    return cy.task("stopServer"); // Stop the server after the tests are done
  });

  it("should search for a job by title", () => {
    // Enter a job title in the search field
    cy.get("#searchField").type("Test Job Title", { force: true });
    // Trigger the search
    cy.get("#searchButton").click();
    // Verify that the job appears in the results
    cy.get("#jobTableContent").contains("Test Job Title").should("exist");
  });

  it("should search for a job by company name", () => {
    // Enter a company name in the search field
    cy.get("#searchField").clear().type("Test Company", { force: true });
    // Trigger the search
    cy.get("#searchButton").click();
    // Verify that jobs from the company appear in the results
    cy.get("#jobTableContent").contains("Test Company").should("exist");
  });

  it("should search for a job by location", () => {
    // Enter a location in the search field
    cy.get("#searchField").clear().type("Test Location", { force: true });
    // Trigger the search
    cy.get("#searchButton").click();
    // Verify that jobs in the location appear in the results
    cy.get("#jobTableContent").contains("Test Location").should("exist");
  });

  it("should display no results for a non-existent job", () => {
    // Enter a non-existent search term
    cy.get("#searchField").clear().type("NonExistentJob", { force: true });
    // Trigger the search
    cy.get("#searchButton").click();
    // Verify that no jobs appear in the results
    cy.get("#jobTableContent").contains("No jobs found").should("exist");
  });
});
