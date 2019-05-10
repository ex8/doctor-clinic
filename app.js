const express = require('express');
const logger = require('morgan');
const nunjucks = require('nunjucks');
const createError = require('http-errors');
const db = require('./config/database');

const app = express();

nunjucks.configure('views', {
    express: app,
    autoescape: true
});
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.get(`/`, (req, res) => res.render('index'));
app.get(`/appointments`, (req, res) => {
    db.any(`SELECT * FROM appointments`)
        .then(appointments => res.render('appointments', { appointments }))
        .catch(err => console.error(err));
});

app.get(`/doctors`, (req, res) => {
    db.any(`SELECT * FROM doctors`)
        .then(doctors => res.render('doctors', { doctors }))
        .catch(err => console.error(err));
});

app.get(`/patients`, (req, res) => {
    db.any(`SELECT * FROM patients`)
        .then(patients => res.render('patients', { patients }))
        .catch(err => console.error(err));
});

app.get(`/prescriptions`, (req, res) => {
    db.any(`SELECT * FROM prescriptions`)
        .then(prescriptions => res.render('prescriptions', { prescriptions }))
        .catch(err => console.error(err));
});

app.get(`/rooms`, (req, res) => {
    db.any(`SELECT * FROM rooms`)
        .then(rooms => res.render('rooms', { rooms }))
        .catch(err => console.error(err));
});


app.use((req, res, next) => next(createError(500)));

app.listen(3000, () => console.log(`Express running...`));
