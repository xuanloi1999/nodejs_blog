class NewsController {
    //[get] /news
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('Show detail');
    }
}

const newsController = new NewsController();
export default newsController;
