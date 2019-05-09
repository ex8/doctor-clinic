const express = require('express');
const logger = require('morgan');
const nunjucks = require('nunjucks');
const createError = require('http-errors');

const app = express();

nunjucks.configure('views', {
    express: app,
    autoescape: true
});
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname, 'public')));

app.get(`/`, (req, res) => res.render('index'));

app.use((req, res, next) => next(createError(500)));

app.listen(3000, () => console.log(`Express running...`));
