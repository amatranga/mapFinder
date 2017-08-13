const express = require('express');
const path = require('path');
const middleware = require('./middleware');
const routes = require('./routes');

const app = express();

app.use(middleware.morgan('dev'));
app.use(middleware.cookieParser());
app.use(middleware.bodyParser.urlencoded({ extended: false }));
app.use(middleware.bodyParser.json());
app.set('view engine', 'ejs');
console.log(path.join(__dirname, 'views'));

app.use(middleware.auth.session);
app.use(middleware.passport.initialize());
app.use(middleware.passport.session());
app.use(middleware.flash());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', routes.auth);
app.use('/api', routes.api);
app.use('/api/achievements', routes.achievements);
app.use('/api/myMap', routes.myMap);
app.use('/api/settings', routes.settings);
app.use('/api/statistics', routes.statistics);

module.exports = app;
