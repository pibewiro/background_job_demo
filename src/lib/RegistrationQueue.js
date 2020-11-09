const Bull = require("bull");
const redisConfig = require("../config/redis");
const RegistrationMail = require("../jobs/RegistrationMail");

class RegistrationMailQueue {
  constructor() {
    this.queue = {};
    this.init();
  }

  init() {
    this.queue = {
      bull: new Bull(RegistrationMail.key, redisConfig),
      name: RegistrationMail.key,
      handle: RegistrationMail.handle,
    };
  }

  add(data) {
    return this.queue.bull.add(data);
  }

  processQueue() {
    this.queue.bull.process(this.queue.handle);

    this.queue.bull.on("failed", async (job, error) => {
      console.log("Job failed", job.queue.name);
    });
  }
}
module.exports = new RegistrationMailQueue();
