import express from 'express';
import MessageController from '../controllers/message.controller';
import messageModel from '../models/message.model';

const router = express.Router();
const messageController = new MessageController(messageModel);

/**
 * CUSTOMER
 */

router.get('/get-all', messageController.getAll);
router.get('/create', messageController.create);

export default router;
