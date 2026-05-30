import { Router } from 'express';
import { uploadAudio } from '../middlewares/uploadAudio.js';
import { predictSyllable } from '../controllers/predictController.js';
import auth from '../middlewares/auth.js'; // Impor middleware riyal

const router = Router();

// Endpoint ini sekarang wajib mengirimkan Access Token via Header Bearer
router.post('/', auth, uploadAudio, predictSyllable);

export default router;