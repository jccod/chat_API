const {
  logError,
  errorHandler,
  ormErrorHandler,
} = require("../middlerware/error.handler");

const errorHandlerRoute = (app) => {
  app.use(logError);
  app.use(ormErrorHandler);
  app.use(errorHandler);

  app.use("*", (req, res) => {
    return res.status(404).send("Page not found");
  });
};

module.exports = errorHandlerRoute;
