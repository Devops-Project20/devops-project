function cov_13063ysu37(){var path="C:\\Users\\darry\\Documents\\DVOPS_Projects\\devops-project\\public\\js\\createJob.js";var hash="40e9f42556fad18b568605536c13d878636497d5";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\darry\\Documents\\DVOPS_Projects\\devops-project\\public\\js\\createJob.js",statementMap:{"0":{start:{line:2,column:17},end:{line:2,column:60}},"1":{start:{line:3,column:21},end:{line:3,column:65}},"2":{start:{line:4,column:24},end:{line:4,column:71}},"3":{start:{line:5,column:19},end:{line:5,column:61}},"4":{start:{line:6,column:25},end:{line:6,column:73}},"5":{start:{line:7,column:24},end:{line:7,column:71}},"6":{start:{line:9,column:20},end:{line:9,column:86}},"7":{start:{line:11,column:4},end:{line:28,column:5}},"8":{start:{line:12,column:25},end:{line:16,column:10}},"9":{start:{line:17,column:23},end:{line:17,column:44}},"10":{start:{line:18,column:8},end:{line:24,column:9}},"11":{start:{line:19,column:12},end:{line:19,column:45}},"12":{start:{line:20,column:12},end:{line:20,column:23}},"13":{start:{line:21,column:12},end:{line:21,column:33}},"14":{start:{line:23,column:12},end:{line:23,column:58}},"15":{start:{line:26,column:8},end:{line:26,column:50}},"16":{start:{line:27,column:8},end:{line:27,column:57}},"17":{start:{line:32,column:4},end:{line:32,column:53}},"18":{start:{line:33,column:4},end:{line:33,column:54}},"19":{start:{line:34,column:4},end:{line:34,column:57}},"20":{start:{line:35,column:4},end:{line:35,column:52}},"21":{start:{line:36,column:4},end:{line:36,column:58}},"22":{start:{line:37,column:4},end:{line:37,column:57}},"23":{start:{line:38,column:4},end:{line:38,column:38}},"24":{start:{line:40,column:0},end:{line:40,column:25}}},fnMap:{"0":{name:"addJob",decl:{start:{line:1,column:15},end:{line:1,column:21}},loc:{start:{line:1,column:24},end:{line:29,column:1}},line:1},"1":{name:"clearAndCloseModal",decl:{start:{line:31,column:9},end:{line:31,column:27}},loc:{start:{line:31,column:30},end:{line:39,column:1}},line:31}},branchMap:{"0":{loc:{start:{line:18,column:8},end:{line:24,column:9}},type:"if",locations:[{start:{line:18,column:8},end:{line:24,column:9}},{start:{line:22,column:15},end:{line:24,column:9}}],line:18}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0},f:{"0":0,"1":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"40e9f42556fad18b568605536c13d878636497d5"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_13063ysu37=function(){return actualCoverage;};}return actualCoverage;}cov_13063ysu37();async function addJob(){cov_13063ysu37().f[0]++;const name=(cov_13063ysu37().s[0]++,document.getElementById('addJobName').value);const location=(cov_13063ysu37().s[1]++,document.getElementById('addLocation').value);const description=(cov_13063ysu37().s[2]++,document.getElementById('addDescription').value);const salary=(cov_13063ysu37().s[3]++,document.getElementById('addSalary').value);const companyEmail=(cov_13063ysu37().s[4]++,document.getElementById('addCompanyEmail').value);const companyName=(cov_13063ysu37().s[5]++,document.getElementById('addCompanyName').value);const jobData=(cov_13063ysu37().s[6]++,{name,location,description,salary,companyEmail,companyName});cov_13063ysu37().s[7]++;try{const response=(cov_13063ysu37().s[8]++,await fetch('/add-job',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(jobData)}));const result=(cov_13063ysu37().s[9]++,await response.json());cov_13063ysu37().s[10]++;if(response.ok){cov_13063ysu37().b[0][0]++;cov_13063ysu37().s[11]++;alert('Job added successfully!');cov_13063ysu37().s[12]++;loadJobs();cov_13063ysu37().s[13]++;clearAndCloseModal();}else{cov_13063ysu37().b[0][1]++;cov_13063ysu37().s[14]++;alert('Failed to add job: '+result.message);}}catch(error){cov_13063ysu37().s[15]++;console.error('Error adding job:',error);cov_13063ysu37().s[16]++;alert('An error occurred while adding the job.');}}function clearAndCloseModal(){cov_13063ysu37().f[1]++;cov_13063ysu37().s[17]++;document.getElementById('addJobName').value='';cov_13063ysu37().s[18]++;document.getElementById('addLocation').value='';cov_13063ysu37().s[19]++;document.getElementById('addDescription').value='';cov_13063ysu37().s[20]++;document.getElementById('addSalary').value='';cov_13063ysu37().s[21]++;document.getElementById('addCompanyEmail').value='';cov_13063ysu37().s[22]++;document.getElementById('addCompanyName').value='';cov_13063ysu37().s[23]++;$('#resourceModal').modal('hide');}cov_13063ysu37().s[24]++;window.onload=loadJobs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTMwNjN5c3UzNyIsImFjdHVhbENvdmVyYWdlIiwiYWRkSm9iIiwiZiIsIm5hbWUiLCJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwibG9jYXRpb24iLCJkZXNjcmlwdGlvbiIsInNhbGFyeSIsImNvbXBhbnlFbWFpbCIsImNvbXBhbnlOYW1lIiwiam9iRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJqc29uIiwib2siLCJiIiwiYWxlcnQiLCJsb2FkSm9icyIsImNsZWFyQW5kQ2xvc2VNb2RhbCIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCIkIiwibW9kYWwiLCJ3aW5kb3ciLCJvbmxvYWQiXSwic291cmNlcyI6WyJjcmVhdGVKb2IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gYWRkSm9iKCkge1xyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRKb2JOYW1lJykudmFsdWU7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRMb2NhdGlvbicpLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkRGVzY3JpcHRpb24nKS52YWx1ZTtcclxuICAgIGNvbnN0IHNhbGFyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRTYWxhcnknKS52YWx1ZTtcclxuICAgIGNvbnN0IGNvbXBhbnlFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRDb21wYW55RW1haWwnKS52YWx1ZTtcclxuICAgIGNvbnN0IGNvbXBhbnlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZENvbXBhbnlOYW1lJykudmFsdWU7XHJcbiBcclxuICAgIGNvbnN0IGpvYkRhdGEgPSB7IG5hbWUsIGxvY2F0aW9uLCBkZXNjcmlwdGlvbiwgc2FsYXJ5LCBjb21wYW55RW1haWwsIGNvbXBhbnlOYW1lIH07XHJcbiBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FkZC1qb2InLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoam9iRGF0YSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdKb2IgYWRkZWQgc3VjY2Vzc2Z1bGx5IScpO1xyXG4gICAgICAgICAgICBsb2FkSm9icygpO1xyXG4gICAgICAgICAgICBjbGVhckFuZENsb3NlTW9kYWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIGFkZCBqb2I6ICcgKyByZXN1bHQubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgam9iOicsIGVycm9yKTtcclxuICAgICAgICBhbGVydCgnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIHRoZSBqb2IuJyk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5mdW5jdGlvbiBjbGVhckFuZENsb3NlTW9kYWwoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkSm9iTmFtZScpLnZhbHVlID0gJyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTG9jYXRpb24nKS52YWx1ZSA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZERlc2NyaXB0aW9uJykudmFsdWUgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRTYWxhcnknKS52YWx1ZSA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZENvbXBhbnlFbWFpbCcpLnZhbHVlID0gJyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkQ29tcGFueU5hbWUnKS52YWx1ZSA9ICcnO1xyXG4gICAgJCgnI3Jlc291cmNlTW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG59XHJcbndpbmRvdy5vbmxvYWQgPSBsb2FkSm9iczsiXSwibWFwcGluZ3MiOiJ3cEZBZVk7QUFBQUEsY0FBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxjQUFBLEdBZlosY0FBZSxDQUFBRSxNQUFNQSxDQUFBLENBQUcsQ0FBQUYsY0FBQSxHQUFBRyxDQUFBLE1BQ3BCLEtBQU0sQ0FBQUMsSUFBSSxFQUFBSixjQUFBLEdBQUFLLENBQUEsTUFBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUNDLEtBQUssRUFDeEQsS0FBTSxDQUFBQyxRQUFRLEVBQUFULGNBQUEsR0FBQUssQ0FBQSxNQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQ0MsS0FBSyxFQUM3RCxLQUFNLENBQUFFLFdBQVcsRUFBQVYsY0FBQSxHQUFBSyxDQUFBLE1BQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUNDLEtBQUssRUFDbkUsS0FBTSxDQUFBRyxNQUFNLEVBQUFYLGNBQUEsR0FBQUssQ0FBQSxNQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsS0FBSyxFQUN6RCxLQUFNLENBQUFJLFlBQVksRUFBQVosY0FBQSxHQUFBSyxDQUFBLE1BQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENB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