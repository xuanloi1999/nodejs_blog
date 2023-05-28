import express from 'express';
import siteController from '../app/controllers/SiteController.js';
var router = express.Router();

router.get('/search/:slug', siteController.search);
router.get('/search', siteController.search);
router.get('/', siteController.home);

export default router;
