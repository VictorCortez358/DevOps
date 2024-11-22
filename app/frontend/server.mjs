import express from 'express';
import axios from 'axios'; // Importamos axios
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

const backendEndpoints =
    process.env.NODE_ENV === 'production'
        ? process.env.BACKEND_SERVICE_PROD
        : process.env.BACKEND_SERVICE_DEV;

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

app.get('/get-products', async (req, res) => {
    try {
        const response = await axios.get(`${backendEndpoints}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error al obtener productos:', error.message);
        res.status(500).send('Error al comunicarse con el backend.');
    }
});

app.listen(3000, () => {
    console.log('Frontend listening on port 3000!');
});
