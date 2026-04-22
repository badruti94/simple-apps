import express from 'express';
const app = express();

app.get('/api/c-to-f', (req, res) => {
    const { temp } = req.query;
    if (!temp) return res.status(400).json({ error: "Masukkan suhu Celsius di query ?temp=..." });
    const fahrenheit = (temp * 9 / 5) + 32;
    res.json({ celsius: temp, fahrenheit });
});

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => console.log(`Listening on port ${port}`));