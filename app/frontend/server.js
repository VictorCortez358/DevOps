import express from 'express';
import { Http2ServerRequest } from 'http2';
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

app.get('/get-products', (req, res) => {
    const options = {
        host: backendEndpoints,
        path: '/',
        port: '3001',
        method: 'GET',
    };

    const callback = (response) => {
        let str = '';
        response.on('data', (chunk) => {
            str += chunk;
        });

        response.on('end', () => {
            console.log(str);
            res.writeHead(200);
            res.end(str);
        });
    };

    const req = Http2ServerRequest.request(options, callback);
    req.end();
});

app.listen(3000, () => {
    console.log("App listening on port 3000!");
});
