const express = require('express');
const middleware = require('../middleware');

const router = express.Router();

router.route('/')
  .get(middleware.auth.homeRedirect);

router.route('/myMap')
  .get(middleware.auth.verify, middleware.auth.render);

router.route('/achievements')
  .get(middleware.auth.verify, middleware.auth.render);

router.route('/statistics')
  .get(middleware.auth.verify, middleware.auth.render);

router.route('/settings')
  .get(middleware.auth.verify, middleware.auth.render);

router.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
  });

router.get('/auth/google', middleware.passport.authenticate('google', {
  scope: ['email', 'profile']
}));

router.get('/auth/google/callback',
  middleware.passport.authenticate('google', 
  {failureRedirect: '/'}),
  middleware.auth.redirect);

router.get('/auth/facebook', middleware.passport.authenticate('facebook', {
  scope: ['public_profile', 'email']
}));

router.get('/auth/facebook/callback',
  middleware.passport.authenticate('facebook', 
  {failureRedirect: '/'}),
  middleware.auth.redirect);

module.exports = router;
