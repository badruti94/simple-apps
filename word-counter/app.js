import express from 'express';
const app = express();


app.get('/api/word-count', (req, res) => {
    const { text } = req.query;
    if (!text) return res.status(400).json({ error: "Kirim json { 'text': '...' }" });
    const count = text.trim().split(/\s+/).length;
    res.json({ word_count: count });
});

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => console.log(`Listening on port ${port}`));