process.env.BASE_URL = 'http://localhost:8888';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const eventsRoutes = require('./Routes/events_routes');
const sessionRoutes = require('./Routes/session_routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false } ));
app.use(bodyParser.json());
app.use(fileUpload());

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const auth = require('./auth');

app.use( cors ({
    credentials: true,
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type']
}
))


app.use( session({
    store  : new FileStore,
    secret : '123456',
    resave: false,
    saveUninitialized: true,
    name: 'calendar'
}))

app.use('/auth', sessionRoutes);
app.use('/events', eventsRoutes);


app.listen(8888, ()=>{console.log('escuchando...')} );