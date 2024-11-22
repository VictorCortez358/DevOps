import express from 'express';
import { join } from 'path';
import { createRequire } from 'module';

// Crear una referencia para usar 'require' dentro de ESM
const require = createRequire(import.meta.url);
const http = require('http'); // Ahora podemos usar require para http

let app = express();

const backendEndpoints = process.env.BACKEND_SERVICE

app.get('/', (req, res) => {
    // Usamos import.meta.url para obtener el __dirname
    const __dirname = new URL('.', import.meta.url).pathname;
    res.sendFile(join(__dirname, "index.html"));
});

app.get('/get-products', function (req, res) {
    var options = {
        host: backendEndpoints,
        path: '/',
        port: '3001',
        method: 'GET'
    };

    const callback = function(response) {
        let str = '';
        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            console.log(str);
            res.writeHead(200);
            res.end(str);
        });
    }

    var reqHttp = http.request(options, callback);
    reqHttp.write("");
    reqHttp.end();
});

app.listen(3000, () => {
    console.log('Frontend listening on port 3000!');
});
