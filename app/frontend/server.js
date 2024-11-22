let express = require('express');
let path = require('path');

let app = express();

const backendEndpoints =
    process.env.NODE_ENV === 'production'
        ? process.env.BACKEND_SERVICE_PROD
        : process.env.BACKEND_SERVICE_DEV;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/get-products', function (req, res) {
    var http = require('http');

    var options = {
        host: backendEndpoints,
        path: '/',
        port: '3001',
        method: 'GET'
    };

    callback = function(response) {
        var str = ''
        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            console.log(str);
            res.writeHead(200)
            res.end(str);
        });
    }

    var req = http.request(options, callback);
    req.write("");
    req.end();
});

app.listen(3000, () => {
    console.log('Frontend listening on port 3000!');
});
