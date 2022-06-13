'use strict';

const supertest = require('supertest');
const app = require('../src/server').app;
const request = supertest(app);

describe('Server Tests', () => {
  it('Respond\'s with a 200 status code to a get request to '/'', async () => {

    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });

  test (' Hello route works', async () => {
    const response = await request.get('/hello');
    console.log(response)
    expect(response.status).toEqual(200)
  })
});
