module.exports = {
  provider: "aws-s3",
  providerOptions: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_SECRET,
    region: "us-west-1",
    params: {
      Bucket: "downloadacar2",
    },
  },
};
