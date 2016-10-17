'use strict';

const request = require('supertest');
const app = require('../server');

describe('express', () => {
  it('should respond with Hello World', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .end(done);
  });
  it('should respond with an id', (done) => {
    request(app)
      .post('/addresses')
      .expect('Content-Type', /json/)
      .expect(200, {
        _id: 123,
      })
      .end(done);
  });
  it('should respond with 204 on delete', (done) => {
    request(app)
      .delete('/addresses/123')
      .expect(204)
      .end(done);
  });
});