function cov_10d8174g4l(){var path="C:\\Users\\darry\\Documents\\DVOPS_Projects\\devops-project\\public\\js\\searchJob.js";var hash="7e4499dc5890b33dec1b1738fb7512f8655241e7";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\darry\\Documents\\DVOPS_Projects\\devops-project\\public\\js\\searchJob.js",statementMap:{"0":{start:{line:2,column:4},end:{line:9,column:5}},"1":{start:{line:3,column:25},end:{line:3,column:50}},"2":{start:{line:4,column:21},end:{line:4,column:42}},"3":{start:{line:5,column:8},end:{line:5,column:26}},"4":{start:{line:7,column:8},end:{line:7,column:53}},"5":{start:{line:8,column:8},end:{line:8,column:24}},"6":{start:{line:13,column:20},end:{line:13,column:67}},"7":{start:{line:14,column:21},end:{line:14,column:69}},"8":{start:{line:16,column:4},end:{line:19,column:5}},"9":{start:{line:17,column:8},end:{line:17,column:53}},"10":{start:{line:18,column:8},end:{line:18,column:15}},"11":{start:{line:21,column:18},end:{line:21,column:71}},"12":{start:{line:23,column:4},end:{line:35,column:5}},"13":{start:{line:24,column:25},end:{line:24,column:80}},"14":{start:{line:25,column:8},end:{line:31,column:9}},"15":{start:{line:26,column:25},end:{line:26,column:46}},"16":{start:{line:27,column:12},end:{line:27,column:30}},"17":{start:{line:29,column:12},end:{line:29,column:42}},"18":{start:{line:30,column:12},end:{line:30,column:28}},"19":{start:{line:33,column:8},end:{line:33,column:54}},"20":{start:{line:34,column:8},end:{line:34,column:24}},"21":{start:{line:40,column:24},end:{line:40,column:63}},"22":{start:{line:41,column:4},end:{line:41,column:31}},"23":{start:{line:43,column:4},end:{line:46,column:5}},"24":{start:{line:44,column:8},end:{line:44,column:64}},"25":{start:{line:45,column:8},end:{line:45,column:15}},"26":{start:{line:48,column:4},end:{line:66,column:7}},"27":{start:{line:49,column:24},end:{line:49,column:53}},"28":{start:{line:50,column:8},end:{line:50,column:45}},"29":{start:{line:51,column:8},end:{line:64,column:10}},"30":{start:{line:65,column:8},end:{line:65,column:41}},"31":{start:{line:69,column:0},end:{line:69,column:25}}},fnMap:{"0":{name:"loadJobs",decl:{start:{line:1,column:15},end:{line:1,column:23}},loc:{start:{line:1,column:26},end:{line:10,column:1}},line:1},"1":{name:"searchJobs",decl:{start:{line:12,column:15},end:{line:12,column:25}},loc:{start:{line:12,column:28},end:{line:36,column:1}},line:12},"2":{name:"displayJobs",decl:{start:{line:39,column:9},end:{line:39,column:20}},loc:{start:{line:39,column:27},end:{line:67,column:1}},line:39},"3":{name:"(anonymous_3)",decl:{start:{line:48,column:17},end:{line:48,column:18}},loc:{start:{line:48,column:24},end:{line:66,column:5}},line:48}},branchMap:{"0":{loc:{start:{line:16,column:4},end:{line:19,column:5}},type:"if",locations:[{start:{line:16,column:4},end:{line:19,column:5}},{start:{line:undefined,column:undefined},end:{line:undefined,column:undefined}}],line:16},"1":{loc:{start:{line:16,column:8},end:{line:16,column:29}},type:"binary-expr",locations:[{start:{line:16,column:8},end:{line:16,column:16}},{start:{line:16,column:20},end:{line:16,column:29}}],line:16},"2":{loc:{start:{line:25,column:8},end:{line:31,column:9}},type:"if",locations:[{start:{line:25,column:8},end:{line:31,column:9}},{start:{line:28,column:15},end:{line:31,column:9}}],line:25},"3":{loc:{start:{line:43,column:4},end:{line:46,column:5}},type:"if",locations:[{start:{line:43,column:4},end:{line:46,column:5}},{start:{line:undefined,column:undefined},end:{line:undefined,column:undefined}}],line:43}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0},f:{"0":0,"1":0,"2":0,"3":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"7e4499dc5890b33dec1b1738fb7512f8655241e7"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_10d8174g4l=function(){return actualCoverage;};}return actualCoverage;}cov_10d8174g4l();async function loadJobs(){cov_10d8174g4l().f[0]++;cov_10d8174g4l().s[0]++;try{const response=(cov_10d8174g4l().s[1]++,await fetch('/view-jobs'));const jobs=(cov_10d8174g4l().s[2]++,await response.json());cov_10d8174g4l().s[3]++;displayJobs(jobs);}catch(error){cov_10d8174g4l().s[4]++;console.error('Error fetching jobs:',error);cov_10d8174g4l().s[5]++;displayJobs([]);// Show an empty result if there's an error
}}async function searchJobs(){cov_10d8174g4l().f[1]++;const keyword=(cov_10d8174g4l().s[6]++,document.getElementById("keyword").value.trim());const location=(cov_10d8174g4l().s[7]++,document.getElementById("location").value.trim());cov_10d8174g4l().s[8]++;if((cov_10d8174g4l().b[1][0]++,!keyword)&&(cov_10d8174g4l().b[1][1]++,!location)){cov_10d8174g4l().b[0][0]++;cov_10d8174g4l().s[9]++;alert("Please enter a keyword or location.");cov_10d8174g4l().s[10]++;return;}else{cov_10d8174g4l().b[0][1]++;}const query=(cov_10d8174g4l().s[11]++,new URLSearchParams({keyword,location}).toString());cov_10d8174g4l().s[12]++;try{const response=(cov_10d8174g4l().s[13]++,await fetch(`/search-jobs?${query}`,{method:"GET"}));cov_10d8174g4l().s[14]++;if(response.ok){cov_10d8174g4l().b[2][0]++;const jobs=(cov_10d8174g4l().s[15]++,await response.json());cov_10d8174g4l().s[16]++;displayJobs(jobs);}else{cov_10d8174g4l().b[2][1]++;cov_10d8174g4l().s[17]++;alert("Error searching jobs");cov_10d8174g4l().s[18]++;displayJobs([]);// To clear previous job results
}}catch(error){cov_10d8174g4l().s[19]++;console.error("Error searching jobs:",error);cov_10d8174g4l().s[20]++;displayJobs([]);// To clear previous job results
}}function displayJobs(jobs){cov_10d8174g4l().f[2]++;const jobListings=(cov_10d8174g4l().s[21]++,document.getElementById('job-listings'));cov_10d8174g4l().s[22]++;jobListings.innerHTML='';// Clear previous listings
cov_10d8174g4l().s[23]++;if(jobs.length===0){cov_10d8174g4l().b[3][0]++;cov_10d8174g4l().s[24]++;jobListings.innerHTML='<p>No job listings found.</p>';cov_10d8174g4l().s[25]++;return;}else{cov_10d8174g4l().b[3][1]++;}cov_10d8174g4l().s[26]++;jobs.forEach(job=>{cov_10d8174g4l().f[3]++;const jobCard=(cov_10d8174g4l().s[27]++,document.createElement('div'));cov_10d8174g4l().s[28]++;jobCard.classList.add('job-listing');cov_10d8174g4l().s[29]++;jobCard.innerHTML=`
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
        `;cov_10d8174g4l().s[30]++;jobListings.appendChild(jobCard);});}cov_10d8174g4l().s[31]++;window.onload=loadJobs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTBkODE3NGc0bCIsImFjdHVhbENvdmVyYWdlIiwibG9hZEpvYnMiLCJmIiwicyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqb2JzIiwianNvbiIsImRpc3BsYXlKb2JzIiwiZXJyb3IiLCJjb25zb2xlIiwic2VhcmNoSm9icyIsImtleXdvcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJ0cmltIiwibG9jYXRpb24iLCJiIiwiYWxlcnQiLCJxdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwibWV0aG9kIiwib2siLCJqb2JMaXN0aW5ncyIsImlubmVySFRNTCIsImxlbmd0aCIsImZvckVhY2giLCJqb2IiLCJqb2JDYXJkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIm5hbWUiLCJfaWQiLCJjb21wYW55TmFtZSIsInNhbGFyeSIsImNvbXBhbnlFbWFpbCIsImRlc2NyaXB0aW9uIiwiYXBwZW5kQ2hpbGQiLCJ3aW5kb3ciLCJvbmxvYWQiXSwic291cmNlcyI6WyJzZWFyY2hKb2IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gbG9hZEpvYnMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy92aWV3LWpvYnMnKTtcclxuICAgICAgICBjb25zdCBqb2JzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGRpc3BsYXlKb2JzKGpvYnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBqb2JzOicsIGVycm9yKTtcclxuICAgICAgICBkaXNwbGF5Sm9icyhbXSk7ICAvLyBTaG93IGFuIGVtcHR5IHJlc3VsdCBpZiB0aGVyZSdzIGFuIGVycm9yXHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaEpvYnMoKSB7XHJcbiAgICBjb25zdCBrZXl3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrZXl3b3JkXCIpLnZhbHVlLnRyaW0oKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKS52YWx1ZS50cmltKCk7XHJcblxyXG4gICAgaWYgKCFrZXl3b3JkICYmICFsb2NhdGlvbikge1xyXG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEga2V5d29yZCBvciBsb2NhdGlvbi5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7IGtleXdvcmQsIGxvY2F0aW9uIH0pLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvc2VhcmNoLWpvYnM/JHtxdWVyeX1gLCB7IG1ldGhvZDogXCJHRVRcIiB9KTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgY29uc3Qgam9icyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgZGlzcGxheUpvYnMoam9icyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBzZWFyY2hpbmcgam9ic1wiKTtcclxuICAgICAgICAgICAgZGlzcGxheUpvYnMoW10pOyAvLyBUbyBjbGVhciBwcmV2aW91cyBqb2IgcmVzdWx0c1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNlYXJjaGluZyBqb2JzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgZGlzcGxheUpvYnMoW10pOyAvLyBUbyBjbGVhciBwcmV2aW91cyBqb2IgcmVzdWx0c1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUpvYnMoam9icykge1xyXG4gICAgY29uc3Qgam9iTGlzdGluZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnam9iLWxpc3RpbmdzJyk7XHJcbiAgICBqb2JMaXN0aW5ncy5pbm5lckhUTUwgPSAnJzsgIC8vIENsZWFyIHByZXZpb3VzIGxpc3RpbmdzXHJcblxyXG4gICAgaWYgKGpvYnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgam9iTGlzdGluZ3MuaW5uZXJIVE1MID0gJzxwPk5vIGpvYiBsaXN0aW5ncyBmb3VuZC48L3A+JztcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgam9icy5mb3JFYWNoKGpvYiA9PiB7XHJcbiAgICAgICAgY29uc3Qgam9iQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGpvYkNhcmQuY2xhc3NMaXN0LmFkZCgnam9iLWxpc3RpbmcnKTtcclxuICAgICAgICBqb2JDYXJkLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImpvYi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMj4ke2pvYi5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiam9iLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJhcHBseUpvYignJHtqb2IuX2lkfScpXCI+QXBwbHkgSm9iPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwidXBkYXRlSm9iKCcke2pvYi5faWR9JylcIj5VcGRhdGUgSm9iIExpc3Rpbmc8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJsb2NhdGlvblwiPkxvY2F0aW9uOiAke2pvYi5sb2NhdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29tcGFueVwiPkNvbXBhbnk6ICR7am9iLmNvbXBhbnlOYW1lfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJzYWxhcnlcIj5TYWxhcnk6ICQke2pvYi5zYWxhcnl9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImVtYWlsXCI+Q29udGFjdDogPGEgaHJlZj1cIm1haWx0bzoke2pvYi5jb21wYW55RW1haWx9XCI+JHtqb2IuY29tcGFueUVtYWlsfTwvYT48L3A+XHJcbiAgICAgICAgICAgIDxwPiR7am9iLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICBgO1xyXG4gICAgICAgIGpvYkxpc3RpbmdzLmFwcGVuZENoaWxkKGpvYkNhcmQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSBsb2FkSm9icztcclxuIl0sIm1hcHBpbmdzIjoieWhJQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQWZaLGNBQWUsQ0FBQUUsUUFBUUEsQ0FBQSxDQUFHLENBQUFGLGNBQUEsR0FBQUcsQ0FBQSxNQUFBSCxjQUFBLEdBQUFJLENBQUEsTUFDdEIsR0FBSSxDQUNBLEtBQU0sQ0FBQUMsUUFBUSxFQUFBTCxjQUFBLEdBQUFJLENBQUEsTUFBRyxLQUFNLENBQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFDMUMsS0FBTSxDQUFBQyxJQUFJLEVBQUFQLGNBQUEsR0FBQUksQ0FBQSxNQUFHLEtBQU0sQ0FBQUMsUUFBUSxDQUFDRyxJQUFJLENBQUMsQ0FBQyxFQUFDUixjQUFBLEdBQUFJLENBQUEsTUFDbkNLLFdBQVcsQ0FBQ0YsSUFBSSxDQUFDLENBQ3JCLENBQUUsTUFBT0csS0FBSyxDQUFFLENBQUFWLGNBQUEsR0FBQUksQ0FBQSxNQUNaTyxPQUFPLENBQUNELEtBQUssQ0FBQyxzQkFBc0IsQ0FBRUEsS0FBSyxDQUFDLENBQUNWLGNBQUEsR0FBQUksQ0FBQSxNQUM3Q0ssV0FBVyxDQUFDLEVBQUUsQ0FBQyxD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