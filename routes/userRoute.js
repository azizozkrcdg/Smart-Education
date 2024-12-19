import express from 'express';
import * as authController from '../controllers/authController.js';

const router = express.Router();

router.route('/signup').post(authController.creatUser);

export default router;
