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

  it("should search for a job dynamically from the page content", () => {
    // Dynamically grab job names already displayed on the page
    cy.get("#job-listings").find('h2').then(($jobs) => {
      const jobNames = $jobs.map((i, el) => el.innerText).get();
      
      // Pick a job name dynamically
      const randomJob = Cypress._.sample(jobNames); // Randomly select a job name
      cy.get("#keyword").type(randomJob, { force: true }); // Type in the randomly selected job name
      cy.get("button").contains("Search").click();
      
      cy.get("#job-listings").should('be.visible'); // Ensure job listings are visible
      cy.get("#job-listings").find('h2').each(($el) => {
        const jobName = $el.text();
        expect(jobName).to.include(randomJob); // Verify that the job name includes the randomly selected job name
      });
    });
  });

  it("should search for a job by company name", () => {
    // Dynamically grab company names already displayed on the page
    cy.get("#job-listings").find('.company').then(($companies) => {
      const companies = $companies.map((i, el) => el.innerText).get();
      
      // Pick a company name dynamically
      const randomCompany = Cypress._.sample(companies); // Randomly select a company name
      cy.get("#keyword").clear().type(randomCompany, { force: true }); // Type in the randomly selected company name
      cy.get("button").contains("Search").click();
      cy.wait(1000); // Wait for the results
      cy.get("#job-listings").contains(randomCompany).should("exist");
    });
  });

  it("should search for a job by location", () => {
    // Dynamically grab locations already displayed on the page
    cy.get("#job-listings").find('.location').then(($locations) => {
      const locations = $locations.map((i, el) => el.innerText).get();
      
      // Pick a location dynamically
      const randomLocation = Cypress._.sample(locations); // Randomly select a location
      cy.get("#keyword").clear().type(randomLocation, { force: true }); // Type in the randomly selected location
      cy.get("button").contains("Search").click();
      cy.get("#job-listings").contains(randomLocation).should("exist");
    });
  });

  it("should display no results for a non-existent job", () => {
    // Enter a non-existent search term
    cy.get("#keyword").clear().type("NonExistentJob", { force: true });
    cy.get("button").contains("Search").click();
    // Verify that no jobs appear in the results
    cy.get("#job-listings").contains("No job listings found.").should("exist");
  });
});
