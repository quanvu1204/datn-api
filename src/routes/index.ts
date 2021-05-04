import express from 'express';
import authRoutes from './auth.route';
import customerRoutes from './customer.route';
import messageRoutes from './message.route';
import adminRoutes from './admin.route';

import authentication from '../middlewares/authentication';
import adminAuthentication from '../middlewares/authenticationAdmin';

const router = express.Router();

router.get('/health-check', (_req, res) => {
    res.send('Beem Assistant OK !!');
});

router.use('/auth', authRoutes);
// customer
router.use('/customer', [authentication], customerRoutes);
router.use('/message', [authentication], messageRoutes);
// admin
router.use('/admin', [adminAuthentication], adminRoutes);

export default router;
