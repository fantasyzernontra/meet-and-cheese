module.exports = ({ env }) => ({
  upload: {
    provider: "google-cloud-storage",
    providerOptions: {
      bucketName: env("BUCKET_NAME", process.env.BUCKET_NAME),
      publicFiles: true,
      uniform: false,
      serviceAccount: env("SERVICE_ACCOUNT", process.env.SERVICE_ACCOUNT),
      basePath: "",
      baseUrl: env("BASE_URL", process.env.BASE_URL),
    },
  },
});
