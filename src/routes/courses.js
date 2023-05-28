import express from 'express';
import courseController from '../app/controllers/CourseController.js';
var router = express.Router();

router.get('/:slug', courseController.show);
router.post('/create', courseController.create);

export default router;
