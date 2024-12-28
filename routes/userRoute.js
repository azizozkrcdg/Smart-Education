import express from 'express';
import * as authController from '../controllers/authController.js';

const router = express.Router();

router.route('/signup').post(authController.creatUser);
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);
router.route('/dashboard').get(authController.getDashboardPage);

export default router;
