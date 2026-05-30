export default class AppError extends Error {
  constructor(message, statusCode = 500, options = {}) {
    super(message);

    this.name = 'AppError';
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    this.code = options.code ?? null;
    this.errors = Array.isArray(options.errors) ? options.errors : [];

    Error.captureStackTrace(this, this.constructor);
  }
}