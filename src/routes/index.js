import newsRouter from './news.js';
import courseRouter from './courses.js';
import siteRouter from './site.js';

function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', courseRouter);
    app.use('/', siteRouter);
}

export default route;
