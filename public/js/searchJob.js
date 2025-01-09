let currentPage = 1; // Current page for pagination
const pageSize = 10; // Default number of jobs per page

async function loadJobs(page = 1) {
    const url = `/view-jobs?page=${page}&limit=${pageSize}`;
    handleFetch(url, displayJobs, { totalPages: 1 });
}

async function searchJobs() {
    const keyword = document.getElementById("keyword").value.trim();
    const location = document.getElementById("location").value.trim();

    if (!keyword && !location) {
        alert("Please enter a keyword or location."); // Alert for empty search fields
        displayJobs([]); // Show "No job listings found"
        return;
    }

    const query = new URLSearchParams({ keyword, location }).toString();
    const url = `/search-jobs?${query}`;
    handleFetch(url, displayJobs);
}

async function handleFetch(url, callback, fallbackData = { jobs: [] }) {
    try {
        const response = await fetch(url);
        const data = response.ok ? await response.json() : fallbackData;
        callback(data.jobs, data.totalPages);
    } catch (error) {
        console.error("Fetch Error:", error); // Log the error for debugging
        callback([]); // Handle network errors
    }
}

function displayJobs(jobs, totalPages = 1) {
    const jobListings = document.getElementById("job-listings");
    if (!jobs || jobs.length === 0) {
        jobListings.innerHTML = '<p>No job listings found.</p>';
        updatePaginationControls(1, 1); // Reset pagination
        return;
    }

    // Generate job listings HTML
    jobListings.innerHTML = jobs
        .map(job => `
            <div class="job-listing">
                <div class="job-header">
                    <h2>${job.name}</h2>
                    <div class="job-actions">
                        <button onclick="applyJob('${job._id}')">Apply Job</button>
                        <button onclick="updateJob('${job._id}')">Update Job Listing</button>
                    </div>
                </div>
                <p class="location">Location: ${job.location}</p>
                <p class="company">Company: ${job.companyName}</p>
                <p class="salary">Salary: $${job.salary}</p>
                <p class="email">Contact: <a href="mailto:${job.companyEmail}">${job.companyEmail}</a></p>
                <p>${job.description}</p>
            </div>
        `)
        .join('');

    updatePaginationControls(currentPage, totalPages);
}

function updatePaginationControls(page, totalPages) {
    const paginationControls = document.getElementById("pagination-controls");
    if (totalPages <= 1) {
        paginationControls.innerHTML = ''; // Clear pagination if there's only one page
        return;
    }

    paginationControls.innerHTML = `
        <button ${page === 1 ? 'disabled' : ''} onclick="loadJobs(--currentPage)">Previous</button>
        Page ${page} of ${totalPages}
        <button ${page === totalPages ? 'disabled' : ''} onclick="loadJobs(++currentPage)">Next</button>
    `;
}

window.onload = () => {
    loadJobs(currentPage);
    document.getElementById("search-button").onclick = searchJobs;
};
