module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: "AKIA4TYWJEMWDKOX2Y77",
      secretAccessKey: "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",
      region: "us-west-1",
      params: {
        Bucket: "downloadacar2",
      },
    },
  },
});
