const Job = require('../models/jobs');

// View jobs with pagination
async function viewJobs(req, res) {
    const { page = 1, limit = 10 } = req.query; // Default page = 1, limit = 10
    const skip = (page - 1) * limit;

    try {
        // Count total jobs
        const totalJobs = await Job.countDocuments();

        // Fetch jobs with pagination
        const jobs = await Job.find().skip(skip).limit(Number(limit));

        // Calculate total pages
        const totalPages = Math.ceil(totalJobs / limit);

        // Respond with jobs and pagination metadata
        return res.status(200).json({
            jobs,
            totalPages,
            currentPage: Number(page),
            totalJobs,
        });
    } catch (error) {
        console.error("Error viewing jobs:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    viewJobs,
};
