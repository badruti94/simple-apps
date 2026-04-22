import express from 'express';
const app = express();

app.get('/api/generate-color', (req, res) => {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    res.json({ hex: color });
});

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => console.log(`Listening on port ${port}`));