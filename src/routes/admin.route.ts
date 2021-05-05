import express from 'express';
import AdminController from '../controllers/admin.controller';
import adminModel from '../models/admin.model';

const router = express.Router();
const adminController = new AdminController(adminModel);

/**
 * CUSTOMER
 */

router.get('/list-customer', adminController.getListCustomer);
router.delete('/delete-customer/:id', adminController.deleteCustomer);
router.delete('/delete-device/:id', adminController.deleteDevice);

export default router;
