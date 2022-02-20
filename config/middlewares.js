module.exports = {
  settings: {
    cors: {
      enabled: true,
      headers: "*",
      origin: [
        "http://localhost",
        "https://downloadacar2.s3.us-west-1.amazonaws.com",
        "https://www.downloadacar.xyz/",
      ],
    },
  },
};
