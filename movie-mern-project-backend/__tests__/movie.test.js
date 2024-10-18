const request = require('supertest');
const app = require('../app'); // Adjust if your main file is not app.js

describe('Movie API Endpoints', () => {
  it('should fetch movies from /api/v1/movie', async () => {
    const res = await request(app).get('/api/v1/movie');
    expect(res.statusCode).toEqual(200); 
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty("movieName"); 
  });
});
