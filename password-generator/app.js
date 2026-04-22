import express from 'express';
const app = express();

app.get('/api/generate-password', (req, res) => {
    const length = req.query.len || 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let retVal = "";
    for (let i = 0; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    res.json({ password: retVal });
});

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => console.log(`Listening on port ${port}`));