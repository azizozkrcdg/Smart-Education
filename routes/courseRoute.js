import express from 'express';
import * as courseController from '../controllers/courseController.js';
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.route('/').post(roleMiddleware(["teacher", "admin"]), courseController.createCourse);
router.route('/').get(courseController.getAllCourses);
router.route('/:slug').get(courseController.getCourse);

export default router;
