const express= require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);

// turn on connection to db and server (force: true forces the the database to recreate tables if any of the associates in models/index.js are changed)
// should usually be set to false so it doesn't drop tables every time - force: true is similar to DROP IF EXISTS
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
});