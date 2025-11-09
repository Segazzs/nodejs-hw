export const errorHandler = (err, req, res, next) => {
  const isProd = process.env.NODE_ENV === 'production';

  res.status(500).json({
    error: isProd ? 'We had an error' : err.message,
  });
};
