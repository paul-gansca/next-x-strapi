module.exports = {
  async afterCreate(event) {
    const { result } = event;
    try {
      await strapi.plugins["email"].services.email.send({
        to: `${result.email}`,
        from: "gansca.paul@gmail.com",
        subject: `${result.subject}`,
        text: `Hello ${result.name},
        We have received your message:
        ${result.message}`,
        html: `Hello ${result.name}, <br>
        We have received your message: <br>
        ${result.message} <br>
        We will be in touch shortly.`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
