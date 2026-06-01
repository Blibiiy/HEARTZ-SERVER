import { Router } from 'express';
import { uploadAudio } from '../middlewares/uploadAudio.js';
import { predictSyllable, warmupPredictServer, getAllSyllables } from '../controllers/predictController.js';
import auth from '../middlewares/auth.js';

const router = Router();

router.get('/master', auth, getAllSyllables);
router.get('/warmup', auth, warmupPredictServer);
router.post('/', auth, uploadAudio, predictSyllable);

export default router;