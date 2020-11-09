const Mail = require("../lib/Mail");

module.exports = {
  key: "RegistrationMail",

  async handle({ data }) {
    console.log("Job started");
    const { user } = data;
    await Mail.sendMail({
      from: "Prince Ibewiro <queue@queuetest.com>",
      to: `${user.name} <${user.email}>`,
      subject: "Cadastro",
      html: `<h1>Hello ${user.name}</h1>`,
    });
    console.log("Job completed");
  },
};
