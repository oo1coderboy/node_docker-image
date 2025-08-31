const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Default route
app.get('/', (req, res) => {
    res.send("🎉 Congratulations, your server is running correctly!");
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: "UP", timestamp: new Date() });
});

// About endpoint
app.get('/about', (req, res) => {
    res.send("This is a simple Express.js app running inside Docker 🚀");
});

// Echo endpoint (query params)
app.get('/echo', (req, res) => {
    const { message } = req.query;
    res.json({ youSent: message || "No message provided" });
});

// POST example (send JSON body)
app.post('/data', (req, res) => {
    const body = req.body;
    res.json({
        message: "Data received successfully!",
        yourData: body
    });
});

// Dynamic route
app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    res.json({ userId: id, name: "Sample User", role: "Developer" });
});

app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
});
