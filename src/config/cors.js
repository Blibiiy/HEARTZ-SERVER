import AppError from '../utils/AppError.js';

function parseAllowedOrigins(value) {
  if (!value) return [];
  return value
    .split(',')
    .map((s) => {
      let trimmed = s.trim();
      // Menghapus trailing slash jika ada agar pencocokan origin konsisten
      if (trimmed.endsWith('/')) {
        trimmed = trimmed.slice(0, -1);
      }
      return trimmed;
    })
    .filter(Boolean);
}

const allowedOrigins = parseAllowedOrigins(process.env.CORS_ORIGIN);

export const corsOptions = {
  origin(origin, callback) {
    // Allow non-browser tools (Postman/cURL) that don't send Origin header
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) return callback(null, true);

    return callback(
      new AppError(`CORS blocked: origin ${origin} tidak diizinkan`, 403, {
        code: 'CORS_ORIGIN_NOT_ALLOWED',
        errors: [
          {
            origin,
            allowedOrigins,
          },
        ],
      })
    );
  },

  credentials: true,

  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],

  // Header yang umum dipakai untuk REST API + JWT Authorization
  allowedHeaders: ['Content-Type', 'Authorization'],

  // Preflight caching (optional)
  maxAge: 600,
};