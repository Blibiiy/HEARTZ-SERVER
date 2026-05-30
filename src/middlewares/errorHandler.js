import AppError from '../utils/AppError.js';

export default function errorHandler(err, req, res, next) {
  const env = process.env.NODE_ENV || 'development';

  // Normalize unknown errors into AppError
  let normalizedError = err;
  if (!(err instanceof AppError)) {
    normalizedError = new AppError(
      err?.message || 'Terjadi kesalahan pada server',
      err?.statusCode || 500,
      {
        code: err?.code ?? null,
        errors: Array.isArray(err?.errors) ? err.errors : [],
      }
    );

    // preserve original stack if any
    if (err?.stack) normalizedError.stack = err.stack;
  }

  const statusCode = normalizedError.statusCode || 500;

  const payload = {
    status: normalizedError.status || 'error',
    statusCode,
    message: normalizedError.message || 'Terjadi kesalahan pada server',
    code: normalizedError.code ?? null,
    errors: Array.isArray(normalizedError.errors) ? normalizedError.errors : [],
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    method: req.method,
  };

  if (env === 'development') {
    payload.stack = normalizedError.stack;
  }

  res.status(statusCode).json(payload);
}