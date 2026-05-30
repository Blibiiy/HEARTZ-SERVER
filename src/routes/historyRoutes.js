import { Router } from 'express';
import auth from '../middlewares/auth.js';
import {
  getHistory,
  getHistorySummary,
  getHistoryBySessionId,
} from '../controllers/historyController.js';

const router = Router();

// Semua endpoint riwayat latihan dikunci dengan validasi token keamanan JWT riyal
router.get('/', auth, getHistory);
router.get('/summary', auth, getHistorySummary);
router.get('/:sessionId', auth, getHistoryBySessionId);

export default router;