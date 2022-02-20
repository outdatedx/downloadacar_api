module.exports = {
  name: "strapi::security",
  config: {
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "connect-src": ["'self'", "https:"],
        "img-src": [
          "'self'",
          "data:",
          "blob:",
          "downloadacar2.s3.us-west-1.amazonaws.com",
        ],
        "media-src": [
          "'self'",
          "data:",
          "blob:",
          "downloadacar2.s3.us-west-1.amazonaws.com",
        ],
        upgradeInsecureRequests: null,
      },
    },
  },
  settings: {
    cors: {
      enabled: true,
      headers: "*",
      origin: [
        "http://localhost",
        "https://downloadacar2.s3.us-west-1.amazonaws.com",
      ],
    },
  },
};
