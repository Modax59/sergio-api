module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '74f9cf1e3f86c05f71f5bf4ac6a5feaf'),
  },
});
