import express from 'express';
const app = express();

app.get('/api/coin-flip', (req, res) => {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    res.json({ result });
});

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => console.log(`Listening on port ${port}`));