import express from 'express';
import CustomerController from '../controllers/customer.controller';
import customerModel from '../models/customer.model';

const router = express.Router();
const customerController = new CustomerController(customerModel);

/**
 * CUSTOMER
 */

router.get('/detail', customerController.getDetail);
router.post('/update', customerController.updateCustomer);
router.post('/reset-password', customerController.resetPassword);

export default router;
