import exporess from 'express';
import { registerUser } from "../Controllers/AuthController.js";

const router = exporess.Router();

router.get('/', async(req, res) => {res.send('Auth Route')});
router.post("/register", registerUser);

export default router;