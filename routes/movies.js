const express = require('express');
const MoviesService = require('../services/movies');
const validationHandler = require('../utils/middleware/validationHandler');
const joi = require('@hapi/joi');
const cacheResponse = require('../utils/cacheResponse');
const { FIVE_MINUTES_IN_SECONDS, SIXTY_MINUTES_IN_SECONDS } = require('../utils/time');
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('../utils/schemas/movies');

const moviesApi = (app) => {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  router.get('/', async (req, res, next) => {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    const { tags } = req.query;

    try {
      const movies = await moviesService.getMovies({ tags });

      res.status(200).json({
        data: movies,
        message: 'movies listed'
      });

    } catch (error) {
      next(error);
    }
  });

  //Read
  router.get('/:movieId',
    validationHandler(joi.object({ movieId: movieIdSchema }),
      'params'), async (req, res, next) => {
        cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
        const { movieId } = req.params;
        try {
          const movies = await moviesService.getMovie({ movieId });
          res.status(200).json({
            data: movies,
            message: 'movie retrieved'
          });

        } catch (error) {
          next(error);
        }
      });

  //Create
  router.post('/add', validationHandler(createMovieSchema), async (req, res, next) => {
    const { body: movie } = req;

    try {
      const createMovieId = await moviesService.createMovie({ movie });
      res.status(201).json({
        data: createMovieId,
        message: 'movie created'
      });

    } catch (error) {
      next(error);
    }
  });

  //Updated
  router.put('/:movieId',
    validationHandler(joi.object({ movieId: movieIdSchema })),
    validationHandler(updateMovieSchema), async (req, res, next) => {
      const { body: movie } = req;
      const { movieId } = req.params;

      try {
        const updatedMovieId = await moviesService.updateMovie({ movie, movieId });
        res.status(200).json({
          data: updatedMovieId,
          message: 'movie updated'
        });

      } catch (error) {
        next(error);
      }
    });

  router.patch('/:movieId', async (req, res, next) => {
    const { body: movie } = req;
    const { movieId } = req.params;

    try {
      const patchedMovieId = await moviesService.patchMovie({ movie, movieId });
      res.status(200).json({
        data: patchedMovieId,
        message: 'movie patched'
      });
    } catch (error) {
      next(error);
    }
  });

  //Delete
  router.delete('/:movieId',
    validationHandler(joi.object({ movieId: movieIdSchema })),
    async (req, res, next) => {
      const { movieId } = req.params;
      try {
        const deleteMovieId = await moviesService.deleteMovie({ movieId });
        res.status(200).json({
          data: deleteMovieId,
          message: 'movie deleted'
        });
      } catch (error) {
        next(error);
      }
    });

};

module.exports = moviesApi;
