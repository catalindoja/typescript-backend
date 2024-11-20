import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('Hello from tools!');
});

router.post('/', (_req, res) => {
    res.send('Hello from tools!');
});

export default router;