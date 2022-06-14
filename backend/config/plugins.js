module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "gansca.paul@gmail.com",
        defaultReplyTo: "gansca.paul@gmail.com",
      },
    },
  },
});
