import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({
        products: [
            { name: "MacBook Air M2 2022 midnight 13.6", price: 500 },
            { name: "Monitor Samsung", price: 100 },
            { name: "Keyboard", price: 30 },
        ],
    });
});

export default app;

if (import.meta.url === `file://${process.argv[1]}`) {
    app.listen(3001, () => console.log("App listening on port 3001!"));
}
