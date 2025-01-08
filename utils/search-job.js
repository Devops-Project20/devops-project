const Job = require('../models/jobs');
const mongoose = require('mongoose');

async function searchJobs(req, res) {
    try {
        console.log("Mongoose connection state:", mongoose.connection.readyState);

        const { keyword = "", location = "", page = 1, limit = 10 } = req.query;

        console.log("Query Parameters Received:", { keyword, location, page, limit });

        if (!keyword && !location) {
            return res.status(400).json({ message: "Query parameter is required" });
        }

        let query = {};

        if (keyword) {
            query.$or = [
                { name: new RegExp(keyword, 'i') },
                { companyName: new RegExp(keyword, 'i') }
            ];
        }

        if (location && location !== 'Any Location') {
            query.location = new RegExp(location, 'i');
        }

        console.log("Query Object Built:", query);

        const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);
        console.log("Skip Value Calculated:", skip);

        if (!Job.find || typeof Job.find !== "function") {
            console.error("Job model does not have a valid 'find' method");
            return res.status(500).json({ message: "Job model is not properly configured." });
        }

        const totalJobs = await Job.countDocuments(query);
        console.log("Total Jobs Matching Query:", totalJobs);

        const jobs = await Job.find(query)
            .skip(skip)
            .limit(parseInt(limit, 10))
            .exec(); // Ensure the query executes properly

        console.log("Jobs Fetched:", jobs);

        const totalPages = Math.ceil(totalJobs / limit);

        return res.status(200).json({
            jobs,
            totalPages,
            currentPage: parseInt(page, 10),
            totalJobs,
        });
    } catch (error) {
        console.error("Error details:", error.message || error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    searchJobs,
};
