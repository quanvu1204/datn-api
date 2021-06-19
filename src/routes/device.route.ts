import express from 'express';
import DeviceController from '../controllers/device.controller';
import deviceModel from '../models/device.model';

const router = express.Router();
const deviceController = new DeviceController(deviceModel);

router.get('/get-all', deviceController.findAll);
router.get('/find-by-id/:id', deviceController.findById);
router.put('/update', deviceController.update);
router.delete('/delete/:ip', deviceController.delete);

export default router;
