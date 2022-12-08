module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("DAC_AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("DAC_AWS_ACCESS_SECRET"),
        region: "us-west-1",
        params: {
          Bucket: "downloadacar2",
        },
      },
    },
  },
  graphql: {
    endpoint: "/graphql",
    shadowCRUD: true,
    playgroundAlways: true,
    depthLimit: 100,
    amountLimit: 2500,
    apolloServer: {
      tracing: false,
    },
    config: {
      defaultLimit: 100,
    },
  },
});
