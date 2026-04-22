import express from 'express';

const app = express();

app.get('/api/generate-otp', (req, res) => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    res.json({ otp: otp.toString() });
});

const port = Number(process.env.PORT ?? 3000);
app.listen(3000, () => console.log(`Listening on port ${port}`));