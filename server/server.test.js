const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('server.js', () => {
  describe('GET /', () => {
    it('should return some response', (done) => {
      request(app)
        .get('/')
        .expect((res) => {
          expect(res.body).toBeA('object').toInclude({
            error: 'Page not found.'
          })
        })
        .end(done);
    });
  });
  
  describe('GET /users', () => {
    it('should return users', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({name:'Jiwon', age: 40});
        })
        .end(done);
    });
  });
});
