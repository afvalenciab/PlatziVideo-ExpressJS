const assert = require('assert');
const proxyquire = require('proxyquire');
const { moviesMock, MovieServiceMock } = require('../utils/mocks/moviesMock');
const testServer = require('../utils/testServer');

describe('Routes - Movies', function () {
  const route = proxyquire('../routes/movies', {
    '../services/movies': MovieServiceMock
  });

  const request = testServer(route);

  describe('GET /movies', function () {
    it('Should respond with status 200', function (done) {
      request.get('/api/movies').expect(200, done);
    });

    it('Should respond with the list of movies', function (done){
      request.get('/api/movies').end((err, res) => {
        assert.deepEqual(res.body, {
          data: moviesMock,
          message: 'movies listed'
        });

        done();
      });
    });
  });

  describe('GET /movies/:movieId', () => {
    it('Should respond with the movie with _id equal to movieId', (done) => {
      request.get('/api/movies/5dadf72349a1b7109128721d').end((err, res) => {
        assert.deepEqual(res.body, {
          data: moviesMock[0],
          message: 'movie retrieved'
        });
        done();
      });
    });
  });
});