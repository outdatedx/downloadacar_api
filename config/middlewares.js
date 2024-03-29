module.exports = [
  "strapi::errors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  // {
  //   name: "strapi::security",
  //   config: {
  //     contentSecurityPolicy: {
  //       useDefaults: true,
  //       directives: {
  //         "connect-src": ["'self'", "https://"],
  //         "img-src": [
  //           "'self'",
  //           "data:",
  //           "blob:",
  //           "downloadacar2.s3.us-west-1.amazonaws.com",
  //           "amazonaws.com",
  //         ],
  // "media-src": [
  //   "'self'",
  //   "data:",
  //   "blob:",
  //   "downloadacar2.s3.us-west-1.amazonaws.com",
  //   "amazonaws.com",
  // ],
  //         upgradeInsecureRequests: null,
  //       },
  //     },
  //   },
  // },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: [
        "*",
        "http://localhost:1337",
        "http://localhost:3000",
        "https://downloadacar.herokuapp.com/",
        "https://www.downloadacar.xyz/",
      ],
      method: ["*"],
    },
  },
  {
    name: "strapi::security",
    config: {
      headers: ["*"],
      origin: ["*"],
      contentSecurityPolicy: {
        origin: ["*"],
        directives: {
          "script-src": [
            "'self'",
            "https://www.gstatic.com/",
            "https://www.google.com/jsapi",
            "https://apis.google.com/js/platform.js",
            "https://apis.google.com/",
            "http://localhost:1337/admin/",
          ],
          "script-src-elem": [
            "'self'",
            "https://www.gstatic.com/",
            "https://www.google.com/jsapi",
            "https://apis.google.com/js/platform.js",
            "https://apis.google.com/",
            "http://localhost:1337/admin/",
          ],
          "frame-src": [
            "https://content.googleapis.com/",
            "https://accounts.google.com/",
          ],
          "img-src": [
            "*",
            "(.*)",
            "'self'",
            "blob:",
            "data:",
            "http://www.gstatic.com/",
            "http://localhost:1337/admin/",
            "http://ssl.gstatic.com",
            "http://localhost:1337",
            "http://localhost:3000",
            "https://downloadacar.herokuapp.com/",
            "https://www.downloadacar.xyz/",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "downloadacar2.s3.us-west-1.amazonaws.com",
            "amazonaws.com",
          ],
        },
      },
    },
  },
];
