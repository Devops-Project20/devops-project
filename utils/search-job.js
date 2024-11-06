const Job = require('../models/jobs');

async function searchJobs(req, res) {
    try {
        const { keyword, location, classification } = req.query;

        // Build query object
        let query = {};

        if (keyword) {
            query.$or = [
                { name: new RegExp(keyword, 'i') },
                { description: new RegExp(keyword, 'i') }
            ];
        }

        if (location && location !== 'Any Location') {
            query.location = new RegExp(location, 'i');
        }

        if (classification && classification !== 'Any Classification') {
            query.classification = new RegExp(classification, 'i');  // Assuming classification field exists in Job schema
        }

        // Find jobs based on query
        const jobs = await Job.find(query);
        return res.status(200).json(jobs);
    } catch (error) {
        console.error("Error searching jobs:", error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    searchJobs
}