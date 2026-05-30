import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'; // 🌟 1. Impor cookie-parser di sini

import { corsOptions } from './config/cors.js';
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';

import predictRoutes from './routes/predictRoutes.js';
import authRoutes from './routes/authRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import historyRoutes from './routes/historyRoutes.js';

dotenv.config();

const app = express();

// CORS (whitelist-based) + preflight (Express 5 compatible)
app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // 🌟 2. Pasang di sini agar semua request mengekstrak cookie sebelum masuk ke rute

// Root
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Server Heartz API beroperasi dengan baik',
  });
});

// Routes
app.use('/api/predict', predictRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/history', historyRoutes);

// 404 handler
app.use(notFound);

// Centralized error handler
app.use(errorHandler);

export default app;