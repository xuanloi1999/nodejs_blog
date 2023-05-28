import courseModel from '../models/Course.js';
class CourseController {
    //[GET] /courses/:slug
    show(req, res) {
        console.log(req.params.slug);
        courseModel.findOne({slug: req.params.slug})
                    .then((course) => {
                        res.json(course)
                    })
                    .catch(() => {error: "Message"})
    }

    create(req, res) {
        const course = new courseModel(req.body)
        console.log(course);

        course.save();
        res.send("Complete")
    }
}

const newsController = new CourseController();
export default newsController;
