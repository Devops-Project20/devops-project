const { searchJobs } = require("../utils/search-job");
const Job = require("../models/jobs");

jest.mock("../models/jobs"); // Mock the Job model

describe("searchJobs", () => {
  let req, res;

  beforeEach(() => {
    req = { query: {} }; // Mock request
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }; // Mock response
  });

  it("should return 400 if no query parameters are provided", async () => {
    req.query = {}; // Empty query

    await searchJobs(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Query parameter is required",
    });
  });

  it("should return 200 and matching jobs for a keyword query", async () => {
    req.query = { keyword: "Developer" };

    const mockJobs = [
      { name: "Frontend Developer", location: "Singapore" },
      { name: "Backend Developer", location: "Singapore" },
    ];

    Job.find.mockResolvedValue(mockJobs); // Mock database response

    await searchJobs(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockJobs);
  });

  it("should return 200 and matching jobs for a location query", async () => {
    req.query = { location: "Singapore" };

    const mockJobs = [
      { name: "Frontend Developer", location: "Singapore" },
      { name: "Backend Developer", location: "Singapore" },
    ];

    Job.find.mockResolvedValue(mockJobs); // Mock database response

    await searchJobs(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockJobs);
  });

  it("should handle database errors gracefully", async () => {
    req.query = { keyword: "Developer" };

    Job.find.mockRejectedValue(new Error("Database Error"));

    await searchJobs(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: "Internal Server Error",
    });
  });
});
