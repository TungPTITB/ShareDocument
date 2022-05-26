
const documentsRouter = require('./documents');

const siteRouter = require('./site');
const authRouter = require('./auth');
const { verifyToken } = require("../app/controllers/verifyToken");




function route(app) {
    app.use('/documents/cntt/nam1',verifyToken, documentsRouter);
    app.use('/documents',verifyToken, documentsRouter);
    app.use('/home',verifyToken, siteRouter);
    app.use('/', authRouter);
}

module.exports = route;