const Bull = require("bull");
const redisConfig = require("../config/redis");
const Test = require("../jobs/TestJob");

class TestQueue {
  constructor() {
    this.queue = {};
    this.init();
  }

  init() {
    this.queue = {
      bull: new Bull(Test.key, redisConfig),
      name: Test.key,
      handle: Test.handle,
    };
  }

  add() {
    return this.queue.bull.add();
  }

  processQueue() {
    this.queue.bull.process(this.queue.handle);

    this.queue.bull.on("failed", async (job, error) => {
      console.log("Job failed", job.queue.name);
    });
  }
}
module.exports = new TestQueue();
