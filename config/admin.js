module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8d0ec745584edd98718a26da909c5b29'),
  },
});
