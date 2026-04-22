import express from 'express';
const app = express();

app.get('/api/bmi', (req, res) => {
    const { weight, height } = req.query; // height dalam meter
    if (!weight || !height) return res.status(400).json({ error: "Butuh weight (kg) dan height (m)" });
    const bmi = (weight / (height * height)).toFixed(2);
    res.json({ bmi: parseFloat(bmi) });
});

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => console.log(`Listening on port ${port}`));