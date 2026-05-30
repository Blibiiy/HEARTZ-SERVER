import { Router } from 'express';
import auth from '../middlewares/auth.js';
import { getProfile, updateProfile } from '../controllers/profileController.js';

const router = Router();

// Jalur rute terproteksi penuh menggunakan pengontrol database riyal
router.get('/', auth, getProfile);
router.put('/', auth, updateProfile);

export default router;