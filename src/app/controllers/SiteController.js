class SiteController {
    //[get] /news
    home(req, res) {
        res.render('home');
    }

    search(req, res) {
        res.send('search');
    }
}

const newsController = new SiteController();
export default newsController;
