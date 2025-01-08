describe("Job Search Frontend", () => {
  let baseUrl;

  before(() => {
    cy.task("startServer").then((url) => {
      baseUrl = url; // Store the base URL
      console.log("Retrieved baseUrl from startServer:", baseUrl); // Debug log
      cy.visit(baseUrl);
    });
  });

  beforeEach(() => {
    cy.visit(baseUrl); // Use the `baseUrl` set in `before`
});


  after(() => {
    return cy.task("stopServer"); // Stop the server after the tests are done
  });

  it("should return jobs matching the keyword", () => {
    cy.get("#keyword").type("Software Developer");
    cy.get("button").contains("Search").click();

    cy.get("#job-listings").should("be.visible");
    cy.get("#job-listings")
      .find("h2")
      .each(($el) => {
        expect($el.text()).to.include("Software Developer");
      });
  });

  it("should return jobs matching the location", () => {
    cy.get("#location").type("Singapore"); // Ensure location input exists
    cy.get("button").contains("Search").click();

    cy.get("#job-listings")
      .find(".job-listing")
      .should("have.length.greaterThan", 0);
    cy.get("#job-listings")
      .find(".location")
      .each(($el) => {
        // Use .location to target the class
        expect($el.text()).to.include("Singapore"); // Validate the location
      });
  });

  it("should return jobs matching both keyword and location", () => {
    cy.get("#keyword").type("Developer");
    cy.get("#location").type("Singapore");
    cy.get("button").contains("Search").click();

    cy.get("#job-listings").should("be.visible");
    cy.get("#job-listings")
      .find("h2")
      .each(($el) => {
        expect($el.text()).to.include("Developer");
      });
    cy.get("#job-listings")
      .find(".location")
      .each(($el) => {
        expect($el.text()).to.include("Singapore");
      });
  });

  it("should display no results for non-matching queries", () => {
    cy.get("#keyword").type("NonExistentJob");
    cy.get("button").contains("Search").click();

    cy.get("#job-listings").should("contain.text", "No job listings found.");
  });

  it("should refresh the page if a missing query parameter is searched", () => {
    console.log("Initial baseUrl:", baseUrl); // Log the base URL
    
    // Simulate clicking the "Search" button without entering any values
    cy.get("button").contains("Search").click();
  
    // Verify the page reset
    cy.url().then((url) => {
      console.log("Current page URL after search:", url); // Debug
    });
    
    // Ensure the URL matches
    cy.url().should("eq", `${baseUrl}/`); // Use the stored `baseUrl`
    
    cy.get("#keyword").should("exist").and("have.value", ""); // Verify keyword input is empty
    cy.get("#location").should("exist").and("have.value", ""); // Verify location input is empty
  });
  

  it("should handle invalid characters in the query gracefully", () => {
    cy.get("#keyword").type("@@@");
    cy.get("#location").type("###");
    cy.get("button").contains("Search").click();

    cy.get("#job-listings").should("contain.text", "No job listings found.");
  });

  it("should handle extremely long query parameters gracefully", () => {
    const longKeyword = "a".repeat(1000);
    cy.get("#keyword").type(longKeyword);
    cy.get("button").contains("Search").click();

    cy.get("#job-listings").should("contain.text", "No job listings found.");
  });

  it("should handle database errors gracefully", () => {
    // Intercept the GET request to /search-jobs and simulate a 500 error
    cy.intercept("GET", "/search-jobs*", {
      statusCode: 500,
      body: { message: "Internal Server Error" },
    }).as("getJobsError");
  
    // Simulate entering a keyword and clicking the search button
    cy.get("#keyword").type("Developer");
    cy.get("button").contains("Search").click();
  
    // Wait for the intercepted request
    cy.wait("@getJobsError");
  
    // Assert that the website link should now be at the front page, meaning that the error has been handled with a website refresh.
    cy.url().should("eq", `${baseUrl}/`); // Use the stored `baseUrl`
  });

  it("should return no results when no jobs exist", () => {
    // Intercept the GET request to /search-jobs and return an empty array
    cy.intercept("GET", "/search-jobs*", {
      statusCode: 200,
      body: [],
    }).as("getEmptyJobs");
  
    // Simulate entering a nonexistent job and clicking the search button
    cy.get("#keyword").type("fdaskjgigusdb");
    cy.get("button").contains("Search").click();
  
    // Wait for the intercepted request
    cy.wait("@getEmptyJobs");
  
    // Assert that the "No job listings found" message is displayed
    cy.get("#job-listings").should("contain.text", "No job listings found.");
  });  

  it("should handle mixed-case keywords correctly", () => {
    cy.get("#keyword").type("DeVeLoPeR");
    cy.get("button").contains("Search").click();

    cy.get("#job-listings").should("be.visible");
    cy.get("#job-listings")
      .find("h2")
      .each(($el) => {
        expect($el.text()).to.include("Developer");
      });
  });

  it("should return paginated results", () => {
    const page = 1;
    const limit = 10;
  
    // Send a request to fetch paginated results
    cy.request(`/view-jobs?page=${page}&limit=${limit}`).then((response) => {
      expect(response.status).to.eq(200); // Ensure the status is 200
      expect(response.body).to.be.an("object"); // Verify the response is an object
      expect(response.body).to.have.property("jobs").and.to.be.an("array"); // Check that jobs is an array
      expect(response.body).to.have.property("totalPages").and.to.be.a("number"); // Check totalPages
      expect(response.body).to.have.property("currentPage").and.to.eq(page); // Check currentPage
      expect(response.body).to.have.property("totalJobs").and.to.be.a("number"); // Check totalJobs
  
      // Validate specific job properties
      response.body.jobs.forEach((job) => {
        expect(job).to.have.property("name").and.to.be.a("string");
        expect(job).to.have.property("location").and.to.be.a("string");
        expect(job).to.have.property("companyName").and.to.be.a("string");
      });
    });
  });
  
  
});

