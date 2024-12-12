import express from 'express';
import * as courseController from '../controllers/courseController.js';

const router = express.Router();

router.route('/').post(courseController.creatCourse);
router.route('/').get(courseController.getAllCourses);

export default router;
