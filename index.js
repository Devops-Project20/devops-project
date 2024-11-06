const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public"));

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECT, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Import job-related functions
const { addJob} = require('./utils/create-job');
app.post('/add-job', addJob);

const { editJob, getJobById } = require('./utils/update-job');
app.put('/edit-job/:id', editJob);
app.get('/view-job/:id', getJobById);

const { viewJobs } = require('./utils/view-job');
app.get('/view-jobs', viewJobs);


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

const server = app.listen(PORT, function () {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = { app, server };
