module.exports.logger = (req, res, next) => {
  const start = Date.now();
  next();
  const duration = Date.now() - start;
  console.log(`${req.method} - ${req.url} - ${res.statusCode} : ${duration}ms`);
};
