import express from 'express';
import * as courseController from '../controllers/courseController.js';

const router = express.Router();

router.route('/').post(courseController.creatCourse);

export default router;
