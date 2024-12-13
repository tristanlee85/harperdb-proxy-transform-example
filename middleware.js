// Express.js middleware to transform the proxied response
export default (req, res, next) => {
  // res.body = res.body + '\n\nAdded by middleware';

  // res.end(res.body);
  next();
};
