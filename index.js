const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const promClient = require('prom-client');
require('dotenv').config();
const logger = require('./logger');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public"));

const statusMonitor = require('express-status-monitor');
app.use(statusMonitor());

// Prometheus Metrics
const collectDefaultMetrics = promClient.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });

// Custom Metrics
const httpRequestDurationMicroseconds = new promClient.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'status_code'],
    buckets: [0.1, 0.5, 1, 2, 5] // Buckets for response times
});

app.use((req, res, next) => {
    const start = process.hrtime();
    res.on('finish', () => {
        const [seconds, nanoseconds] = process.hrtime(start);
        const duration = seconds + nanoseconds / 1e9;
        httpRequestDurationMicroseconds
            .labels(req.method, req.path, res.statusCode)
            .observe(duration);
    });
    next();
});

// Prometheus Metrics Endpoint
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', promClient.register.contentType);
    res.end(await promClient.register.metrics());
});

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

// Import job-related functions
const { searchJobs } = require('./utils/search-job.js');
app.get('/search-jobs', searchJobs);

const { addJob } = require('./utils/create-job');
app.post('/add-job', addJob);

const { editJob, getJobById } = require('./utils/update-job');
app.put('/edit-job/:id', editJob);
app.get('/view-job/:id', getJobById);

const { viewJobs } = require('./utils/view-job');
app.get('/view-jobs', viewJobs);

const { applyjob } = require('./utils/applyjob');
app.post('/apply-job/:jobId', applyjob);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

const server = app.listen(PORT, function () {
    const address = server.address();
    const baseUrl = `http://${address.address === "::" ? 'localhost' : address.address}:${address.port}`;
    console.log(`DevOps project at: ${baseUrl}`);
    logger.info(`Demo project at: ${baseUrl}!`);
    logger.error(`Example or error log`);
});

module.exports = { app, server };
