import express from 'express';
import DeviceController from '../controllers/device.controller';
import deviceModel from '../models/device.model';

const router = express.Router();
const deviceController = new DeviceController(deviceModel);

/**
 * CUSTOMER
 */

router.put('/update', deviceController.update);
router.delete('/delete/:ip', deviceController.delete);

export default router;
