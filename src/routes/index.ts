import express from 'express';
import authRoutes from './auth.route';
import customerRoutes from './customer.route';
import messageRoutes from './message.route';

import authentication from '../middlewares/authentication';

const router = express.Router();

router.get('/health-check', (_req, res) => {
    res.send('Beem Assistant OK !!');
});

router.use('/auth', authRoutes);
router.use('/customer', [authentication], customerRoutes);
router.use('/message', [authentication], messageRoutes);

export default router;
