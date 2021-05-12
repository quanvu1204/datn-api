import express from 'express';
import CommonController from '../controllers/common.controller';
import cityModel from '../models/city.model';

const router = express.Router();
const commonController = new CommonController(cityModel);

router.get('/get-all-city', commonController.findAll);

export default router;
