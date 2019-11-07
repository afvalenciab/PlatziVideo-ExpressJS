const express = require('express');
const MoviesService = require('../services/movies');
const validationHandler = require('../utils/middleware/validationHandler');
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');
const joi = require('@hapi/joi');
const cacheResponse = require('../utils/cacheResponse');
const { FIVE_MINUTES_IN_SECONDS, SIXTY_MINUTES_IN_SECONDS } = require('../utils/time');
const passport = require('passport');
require('../utils/auth/strategies/jwt');
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema
} = require('../utils/schemas/movies');



const moviesApi = (app) => {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  router.get('/', passport.authenticate('jwt', { session: false }), scopesValidationHandler(['read:movies']), async (req, res, next) => {
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
  router.get('/:movieId', passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:movies']),
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
  router.post('/add', passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:movies']),
    validationHandler(createMovieSchema), async (req, res, next) => {
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
  router.put('/:movieId', passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['update:movies']),
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

  router.patch('/:movieId', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
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
  router.delete('/:movieId', passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['delete:movies']),
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
