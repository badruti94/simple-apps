import express from 'express';

const app = express();

app.get('/api/generate-otp', (req, res) => {
    try {
        const otp = Math.floor(100000 + Math.random() * 900000);
        res.json({ otp: otp.toString() });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'error'});
    }
});

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => console.log(`Listening on port ${port}`));