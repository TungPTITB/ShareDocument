class NewsController {
    // [GET] /news
    login(req, res) {
        res.render('login');
    }
}

module.exports = new NewsController();