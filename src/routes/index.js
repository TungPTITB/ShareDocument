const newsRouter = require('./news');
//const meRouter = require('./me');
const documentsRouter = require('./documents');
const siteRouter = require('./site');
const authRouter = require('./auth');




function route(app) {
    app.use('/login', newsRouter);
    app.use('/documents', documentsRouter);
    app.use('/home', siteRouter);
    app.use('/', authRouter);
}

module.exports = route;