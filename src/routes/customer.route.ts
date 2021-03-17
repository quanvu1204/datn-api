import express from 'express';
import AuthController from '../controllers/auth.controller';
import CustomerController from '../controllers/customer.controller';
import customerModel from '../models/customer.model';

const router = express.Router();
const customerController = new CustomerController(customerModel);

/**
 * CUSTOMER
 */

router.get('/detail', customerController.getDetail);
router.post('/update', customerController.updateCustomer);

export default router;
