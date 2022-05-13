const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const res = require('express/lib/response');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const route = require('./routes');

 const db = require('./config/db');

 //Connect to DB
 db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
app.engine('hbs',hbs.engine({
        extname: '.hbs'
    }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http:localhost:${port}`);
});
