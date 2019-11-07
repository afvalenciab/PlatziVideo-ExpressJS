const boom = require('@hapi/boom');

function scopesValidationHandler(allowedScopes) {
  return function (req, res, next) {
    if (!req.user || (req.user && !req.user.scopes)) {
      next(boom.unauthorized('Missing Scopes'));
    }

    const hasAccess = allowedScopes
      .map(scope => req.user.scopes.includes(scope))
      .find(allowed => Boolean(allowed));

      if(hasAccess) {
        next();
      } else {
        next(boom.unauthorized('Insufficiente scopes'));
      }
  };
}

module.exports = scopesValidationHandler;
