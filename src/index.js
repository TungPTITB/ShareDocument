const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const res = require('express/lib/response');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const methodOverride = require('method-override');
const { verifyTokenAndAdmin } = require("./app/controllers/verifyToken");

app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

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

const User = require('./app/models/User');
const Document = require('./app/models/Document');


const Adminbro= require('admin-bro');
const expressAdminBro = require('@admin-bro/express');
const mongooseAdminBro = require('@admin-bro/mongoose');
const { append } = require('express/lib/response');

Adminbro.registerAdapter(mongooseAdminBro);
const AdminbroOptions = {resources : [User, Document]};

const adminBro = new Adminbro(AdminbroOptions);
const router = expressAdminBro.buildRouter(adminBro);
app.use(adminBro.options.rootPath,verifyTokenAndAdmin, router);

app.listen(port, () => {
    console.log(`App listening at http:localhost:${port}`);
});
