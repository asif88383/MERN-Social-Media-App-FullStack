import exporess from 'express';
import { registerUser, loginUser } from "../Controllers/AuthController.js";

const router = exporess.Router();

router.get('/', async(req, res) => {res.send('Auth Route')});
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;