import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({
        products: [
            { name: 'MacBook Air M2 2022 midnight 13.6', price: 500 },
            { name: 'Monitor Samsung', price: 100 },
            { name: 'Keyboard', price: 30 },
            { name: 'Mouse', price: 20 },
        ],
    });
});

export default app;
