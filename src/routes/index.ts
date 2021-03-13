import express from 'express';
import authRoutes from './auth.route';

const router = express.Router();

router.get('/health-check', (_req, res) => {
    res.send('Beem Assistant OK !!');
});

router.use('/auth', authRoutes);

export default router;
