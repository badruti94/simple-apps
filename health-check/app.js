import express from 'express';
const app = express();

app.get('/api/status', (req, res) => {
    res.json({
        status: "Online",
        timestamp: new Date().toISOString(),
        uptime: process.uptime().toFixed(2) + " seconds"
    });
});

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => console.log(`Listening on port ${port}`));