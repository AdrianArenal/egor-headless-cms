module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c87f7154dff429020ad34d6a0e3b2937'),
  },
});
