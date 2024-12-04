let currentPage = 1; // Current page for pagination
const pageSize = 10; // Default number of jobs per page

async function loadJobs(page = 1) {
    try {
        const response = await fetch(`/view-jobs?page=${page}&limit=${pageSize}`);
        if (response.ok) {
            const data = await response.json();
            if (data.jobs && data.totalPages !== undefined) {
                displayJobs(data.jobs);
                updatePaginationControls(page, data.totalPages);
            } else {
                console.error("Invalid response structure:", data);
                displayJobs([]); // Show no jobs if structure is invalid
            }
        } else {
            console.error("Error loading jobs:", response.statusText);
            displayJobs([]);
        }
    } catch (error) {
        console.error("Error fetching jobs:", error);
        displayJobs([]); // Show an empty result if there's an error
    }
}

async function searchJobs() {
    const keyword = document.getElementById("keyword").value.trim();
    const location = document.getElementById("location").value.trim();

    if (!keyword && !location) {
        alert("Please enter a keyword or location.");
        return;
    }

    const query = new URLSearchParams({ keyword, location, page: currentPage, limit: pageSize }).toString();

    try {
        const response = await fetch(`/search-jobs?${query}`, { method: "GET" });
        if (response.ok) {
            const { jobs, totalPages } = await response.json();
            displayJobs(jobs);
            updatePaginationControls(currentPage, totalPages);
        } else {
            console.error("Error searching jobs:", response.statusText);
            alert("Error searching jobs. Please try again.");
        }
    } catch (error) {
        console.error("Error searching jobs:", error);
        alert("An error occurred while searching for jobs.");
    }
}

function displayJobs(jobs) {
    const jobListings = document.getElementById('job-listings');
    jobListings.innerHTML = ''; // Clear previous listings

    if (jobs.length === 0) {
        jobListings.innerHTML = '<p>No job listings found.</p>';
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
    }
}

window.onload = () => loadJobs(currentPage);
