const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const model = require('../../db/models');
const redisClient = require('redis').createClient(process.env.REDISCLOUD_URL);

module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  req.session.returnTo = req.originalUrl;
  res.redirect('/login');
};

module.exports.redirect = (req, res) => {
  let redirect = req.session.returnTo || '/dashboard';
  delete req.session.returnTo;
  res.redirect(redirect);
};

module.exports.homeRedirect = (req, res, next) => {
  res.render('index.ejs', {user: JSON.stringify(req.user)});
};

module.exports.session = session({
  store: new RedisStore({
    client: redisClient,
    host: process.env.REDISCLOUD_URL,
    port: 6739
  }),
  secret: 'We should get to mapping stuff out',
  resave: false,
  saveUninitialized: false
});
