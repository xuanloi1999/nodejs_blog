import courseModel from '../models/Course.js';
import mongooseToObject from '../../util/mongoose.js';

class SiteController {
    //[get] /news
    async home(req, res) {
        const courses = await courseModel
            .find({})
            .then((courses) => {
                res.json(courses)
            })
            .catch(() => res.json({ error: 'Message' }));
    }

    search(req, res) {
        res.send('search');
    }
}

const newsController = new SiteController();
export default newsController;
