import express from 'express';
import siteController from '../app/controllers/SiteController.js';
var router = express.Router();

router.use('/search/:slug', siteController.search);
router.use('/search', siteController.search);
router.use('/', siteController.home);

export default router;
