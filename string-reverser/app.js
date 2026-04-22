import express from 'express';
const app = express();

app.get('/api/reverse', (req, res) => {
    const { text } = req.query;
    if (!text) return res.status(400).json({ error: "Tambah query ?text=... ya" });
    const reversed = text.split('').reverse().join('');
    res.json({ original: text, reversed });
});

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => console.log(`Listening on port ${port}`));