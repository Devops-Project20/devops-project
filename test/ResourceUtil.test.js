const { describe, it } = require("mocha");
const { expect } = require("chai");
const { app, server } = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const Job = require("../models/jobs");
chai.use(chaiHttp);

let baseUrl;

describe("Search Job API", () => {
  before(async () => {
    const { address, port } = await server.address();
    baseUrl = `http://${address === "::" ? "localhost" : address}:${port}`;
  });

  after(() => {
    return new Promise((resolve) => {
      server.close(() => resolve());
    });
  });

  describe("GET /search-jobs", () => {
    it("should return jobs matching the keyword", (done) => {
      chai
        .request(baseUrl)
        .get("/search-jobs")
        .query({ keyword: "Developer" })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("jobs").that.is.an("array");
          res.body.jobs.forEach((job) => {
            expect(job).to.have.property("name").that.includes("Developer");
          });
          done();
        });
    });

    it("should return jobs matching the location", (done) => {
      chai
        .request(baseUrl)
        .get("/search-jobs")
        .query({ location: "Singapore" })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("jobs").that.is.an("array");
          res.body.jobs.forEach((job) => {
            expect(job).to.have.property("location").that.includes("Singapore");
          });
          done();
        });
    });

    it("should return jobs matching both keyword and location", (done) => {
      chai
        .request(baseUrl)
        .get("/search-jobs")
        .query({ keyword: "Developer", location: "Singapore" })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("jobs").that.is.an("array");
          res.body.jobs.forEach((job) => {
            expect(job).to.have.property("name").that.includes("Developer");
            expect(job).to.have.property("location").that.includes("Singapore");
          });
          done();
        });
    });

    it("should return an empty array for no matching results", (done) => {
      chai
        .request(baseUrl)
        .get("/search-jobs")
        .query({ keyword: "NonExistentJob" })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("jobs").that.is.an("array").that.is.empty;
          done();
        });
    });

    it("should return a 400 status for missing query parameter", (done) => {
      chai
        .request(baseUrl)
        .get("/search-jobs")
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an("object");
          expect(res.body.message).to.equal("Query parameter is required");
          done();
        });
    });

    it("should handle invalid characters in the query gracefully", (done) => {
      chai
        .request(baseUrl)
        .get("/search-jobs")
        .query({ keyword: "@@@", location: "###" })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("jobs").that.is.an("array").that.is.empty;
          done();
        });
    });

    it("should handle extremely long query parameters gracefully", (done) => {
      const longKeyword = "a".repeat(1000);
      chai
        .request(baseUrl)
        .get("/search-jobs")
        .query({ keyword: longKeyword })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("jobs").that.is.an("array").that.is.empty;
          done();
        });
    });

    it("should handle database errors gracefully", (done) => {
      const originalFind = Job.find;
      Job.find = () => {
        throw new Error("Internal Server Error");
      };

      chai
        .request(baseUrl)
        .get("/search-jobs")
        .query({ keyword: "Developer" })
        .end((err, res) => {
          expect(res).to.have.status(500);
          expect(res.body).to.be.an("object");
          expect(res.body.message).to.equal("Internal Server Error");
          Job.find = originalFind; // Restore original function
          done();
        });
    });

    it("should return an empty array when no jobs exist", (done) => {
      chai
        .request(baseUrl)
        .get("/search-jobs")
        .query({ keyword: "NonExistentJob" })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("jobs").that.is.an("array").that.is.empty;
          expect(res.body).to.have.property("totalPages").that.equals(0);
          expect(res.body).to.have.property("currentPage").that.equals(1);
          expect(res.body).to.have.property("totalJobs").that.equals(0);
          done();
        });
    });
    

    it("should handle mixed-case keywords correctly", (done) => {
      chai
        .request(baseUrl)
        .get("/search-jobs")
        .query({ keyword: "DeVeLoPeR" })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("jobs").that.is.an("array");
          res.body.jobs.forEach((job) => {
            expect(job).to.have.property("name").that.matches(/developer/i);
          });
          done();
        });
    });
  });
});
