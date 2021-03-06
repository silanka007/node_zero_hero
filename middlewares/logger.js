function logger(req, res, next) {
  const start = Date.now();
  next();
  const duration = Date.now() - start;
  console.log(`${req.method} - ${req.baseUrl}${req.url} - ${res.statusCode} : ${duration}ms`);
}

module.exports = { logger };
