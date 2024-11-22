const request = require('supertest');
const app = require('./backend');

describe('GET /', () => {
    it('should return a list of products', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body.products).toBeDefined();
        expect(response.body.products.length).toBeGreaterThan(0);
    });
});
