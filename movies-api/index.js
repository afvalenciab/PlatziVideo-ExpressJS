const express = require('express');
const cors = require('cors');
const { config } = require('./config/index');
const moviesApi = require('./routes/movies');
const userMoviesApi = require('./routes/userMovies');
const authApi = require('./routes/auth');
const { logErrors, wrapErrors, errorHandler } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

const app = express();
app.use(cors());
app.use(express.json());

authApi(app);
moviesApi(app);
userMoviesApi(app);

app.use(notFoundHandler);

app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);


app.listen(config.port, () => {
  const debug = require('debug')('app:server');
  debug(`Listening http://localhost:${config.port}`)
});

