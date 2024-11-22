import request from 'supertest';
import app from './server.js';

let server;

beforeAll(() => {
    // Inicia el servidor antes de las pruebas
    server = app.listen(3001);
});

afterAll((done) => {
    // Cierra el servidor después de las pruebas
    server.close(done);
});

describe('GET /', () => {
    it('should return a list of products', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body.products).toBeDefined();
        expect(response.body.products.length).toBeGreaterThan(0);
    });
});
