const { describe, it } = require("mocha");
const { expect } = require("chai");
const { app, server } = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const Job = require("../models/jobs"); // Assuming Job is your mongoose model
chai.use(chaiHttp);

let baseUrl;

describe("Search Job API", () => {
  before(async () => {
    const { address, port } = await server.address();
    baseUrl = `http://${address === "::" ? "localhost" : address}:${port}`;
  });

  after(() => {
    return new Promise((resolve) => {
      server.close(() => {
        resolve();
      });
    });
  });

  // Test Suite for searching jobs
  describe("GET /search-jobs", () => {
    it("should return jobs matching the search query", (done) => {
      chai
        .request(baseUrl)
        .get("/search-jobs")
        .query({ keyword: "Developer" }) // Replace "Developer" with an appropriate test query
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          res.body.forEach((job) => {
            expect(job).to.have.property("name").that.includes("Developer"); // Adjust the validation as needed
          });
          done();
        });
    });

    it("should return an empty array if no jobs match the query", (done) => {
      chai
        .request(baseUrl)
        .get("/search-jobs")
        .query({ keyword: "NonExistentJob" }) // Query that does not match any job
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array").that.is.empty;
          done();
        });
    });

    it("should return a 400 status for missing query parameter", (done) => {
      chai
        .request(baseUrl)
        .get("/search-jobs")
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal("Query parameter is required");
          done();
        });
    });

    it("should handle invalid characters in the query", (done) => {
      chai
        .request(baseUrl)
        .get("/search-jobs")
        .query({ keyword: "@@@", location: "###" }) // Invalid characters
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array").that.is.empty;
          done();
        });
    });

    it("should handle extremely long query parameters gracefully", (done) => {
      const longKeyword = "a".repeat(1000); // 1000-character string
      chai
        .request(baseUrl)
        .get("/search-jobs")
        .query({ keyword: longKeyword })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array").that.is.empty;
          done();
        });
    });

    it("should return jobs matching both keyword and location", (done) => {
      chai
        .request(baseUrl)
        .get("/search-jobs")
        .query({ keyword: "Developer", location: "Singapore" }) // Adjust based on test data
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          res.body.forEach((job) => {
            expect(job.name).to.include("Developer");
            expect(job.location).to.include("Singapore");
          });
          done();
        });
    });

    it("should handle database errors gracefully", (done) => {
      // Simulate a database error by mocking the Job.find function
      const originalFind = Job.find;
      Job.find = () => {
        throw new Error("Simulated database error");
      };

      chai
        .request(baseUrl)
        .get("/search-jobs")
        .query({ keyword: "Developer" })
        .end((err, res) => {
          expect(res).to.have.status(500);
          expect(res.body.message).to.equal("Simulated database error");
          Job.find = originalFind; // Restore original function
          done();
        });
    });

    it("should handle requests when no jobs exist", (done) => {
      // Mock Job.find to return an empty array
      const originalFind = Job.find;
      Job.find = async () => [];

      chai
        .request(baseUrl)
        .get("/search-jobs")
        .query({ keyword: "Developer" })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array").that.is.empty;
          Job.find = originalFind; // Restore original function
          done();
        });
    });
  });
});
