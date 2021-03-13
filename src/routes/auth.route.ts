import express from 'express';
import AuthController from '../controllers/auth.controller';
import customerModel from '../models/customer.model';

const router = express.Router();
const authController = new AuthController(customerModel);

/**
 * CUSTOMER
 */

router.post('/customer-login', authController.customerLogin);
router.post('/customer-signUp', authController.customerSignUp);
router.post('/verify-signUp-code', authController.verifyCodeToActiveAccount);
router.post('/send-verify-code', authController.sendVerificationCode);
router.post('/verify-resetPassword-code', authController.verifyCodeToResetPassword);
router.post('/customer-reset-password', authController.customerResetPassword);

export default router;
