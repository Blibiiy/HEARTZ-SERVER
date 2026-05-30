import AppError from '../utils/AppError.js';

export default function notFound(req, res, next) {
  next(new AppError(`Route ${req.originalUrl} tidak ditemukan`, 404));
}