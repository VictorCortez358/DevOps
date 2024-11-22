import request from 'supertest';
import server from './server.js';

describe('GET /', () => {
    afterAll((done) => {
        server.close(done);
    });

    it('should return a list of products', async () => {
        const response = await request(server).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body.products).toBeDefined();
        expect(response.body.products.length).toBeGreaterThan(0);
    });
});
