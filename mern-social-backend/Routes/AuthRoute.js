import exporess from 'express';

const router = exporess.Router();

router.get('/', async(req, res) => {res.send('Auth Route')});

export default router;