const RegistrationQueue = require("../lib/RegistrationQueue");
const redisConfig = require("../config/redis");

RegistrationQueue.processQueue();
