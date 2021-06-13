import express from 'express';
import CustomerController from '../controllers/customer.controller';
import DeviceController from '../controllers/device.controller';
import customerModel from '../models/customer.model';
import deviceModel from '../models/device.model';

const router = express.Router();
const customerController = new CustomerController(customerModel);
const deviceController = new DeviceController(deviceModel);

/**
 * CUSTOMER
 */

router.get('/detail', customerController.getDetail);
router.get('/list-device', customerController.getListDevice);
router.post('/update', customerController.updateCustomer);
router.post('/reset-password', customerController.resetPassword);
router.post('/add-device', deviceController.createDevice);
router.delete('/delete', customerController.deleteCustomer);

export default router;
