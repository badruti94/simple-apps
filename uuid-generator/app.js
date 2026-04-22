import express from 'express';
import crypto from 'crypto';

const app = express();

app.get('/api/generate-uuid', (req, res) => {
    res.json({ uuid: crypto.randomUUID() });
});

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => console.log(`Listening on port ${port}`));