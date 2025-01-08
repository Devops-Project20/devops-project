let currentPage = 1; // Current page for pagination
const pageSize = 10; // Default number of jobs per page

async function loadJobs(page = 1) {
    const jobListings = document.getElementById('job-listings');
    jobListings.innerHTML = '<p>Loading...</p>'; // Temporary loading indicator

    try {
        const response = await fetch(`/view-jobs?page=${page}&limit=${pageSize}`);
        if (response.ok) {
            const data = await response.json();
            if (data.jobs && data.totalPages !== undefined) {
                displayJobs(data.jobs);
                updatePaginationControls(page, data.totalPages);
            } else {
                console.error("Invalid response structure:", data);
                displayJobs([]); // Show "No job listings found" for invalid structure
            }
        } else {
            console.error("Error loading jobs:", response.statusText);
            displayJobs([]); // Show "No job listings found" for server errors
        }
    } catch (error) {
        console.error("Error fetching jobs:", error);
        displayJobs([]); // Show "No job listings found" for network errors
    }
}

async function searchJobs() {
    const keyword = document.getElementById("keyword").value.trim();
    const location = document.getElementById("location").value.trim();

    const jobListings = document.getElementById('job-listings');
    jobListings.innerHTML = '<p>Searching...</p>'; // Temporary searching indicator

    if (!keyword && !location) {
        alert("Please enter a keyword or location."); // Alert for empty search fields
        jobListings.innerHTML = '<p>No job listings found.</p>'; // Reset UI
        return;
    }

    try {
        const query = new URLSearchParams({ keyword, location }).toString();
        const response = await fetch(`/search-jobs?${query}`, { method: "GET" });

        if (response.ok) {
            const data = await response.json();
            if (data.jobs && data.jobs.length > 0) {
                displayJobs(data.jobs);
            } else {
                displayJobs([]); // Show "No job listings found" for empty results
            }
        } else {
            console.error("Error searching jobs:", response.statusText);
            displayJobs([]); // Show "No job listings found" for server errors
        }
    } catch (error) {
        console.error("Error fetching jobs:", error);
        displayJobs([]); // Show "No job listings found" for network errors
    }
}

function displayJobs(jobs) {
    const jobListings = document.getElementById('job-listings');
    jobListings.innerHTML = ''; // Clear previous listings

    if (!jobs || jobs.length === 0) {
        jobListings.innerHTML = '<p>No job listings found.</p>'; // Show "No job listings found" if empty
        return;
    }

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-listing');
        jobCard.innerHTML = `
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
        `;
        jobListings.appendChild(jobCard);
    });
}

function updatePaginationControls(page, totalPages) {
    const paginationControls = document.getElementById("pagination-controls");
    paginationControls.innerHTML = ''; // Clear existing controls

    if (totalPages > 1) {
        const prevButton = document.createElement("button");
        prevButton.textContent = "Previous";
        prevButton.disabled = page === 1;
        prevButton.onclick = () => {
            currentPage--;
            loadJobs(currentPage);
        };

        const nextButton = document.createElement("button");
        nextButton.textContent = "Next";
        nextButton.disabled = page === totalPages;
        nextButton.onclick = () => {
            currentPage++;
            loadJobs(currentPage);
        };

        paginationControls.appendChild(prevButton);
        paginationControls.appendChild(document.createTextNode(` Page ${page} of ${totalPages} `));
        paginationControls.appendChild(nextButton);
    } else {
        // Clear pagination if there's only one page
        paginationControls.innerHTML = '<p>No additional pages.</p>';
    }
}

window.onload = () => {
    loadJobs(currentPage);

    // Add event listeners for testing edge cases
    document.getElementById("search-button").onclick = searchJobs;
};
