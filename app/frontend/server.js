import express from 'express';
import axios from 'axios'; // Importamos axios
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// Definir los endpoints de backend según el entorno
const backendEndpoints =
  process.env.NODE_ENV === 'production'
    ? process.env.BACKEND_SERVICE_PROD
    : process.env.BACKEND_SERVICE_DEV;

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

app.get('/get-products', async (req, res) => {
  try {
    // Realizar la solicitud al backend usando axios
    const response = await axios.get(`http://${backendEndpoints}:3001/`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error al obtener productos:', error.message);
    res.status(500).send('Error al comunicarse con el backend.');
  }
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
