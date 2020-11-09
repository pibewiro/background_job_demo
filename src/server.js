const express = require("express");
const RegistrationQueue = require("./lib/RegistrationQueue");

const app = express();

app.use(express.json());

app.post("/user", async (req, res) => {
  const { name, email, password } = req.body;
  const user = {
    name,
    email,
    password,
  };

  await RegistrationQueue.add({ user });
  return res.status(200).json("Data Saved");
});
console.log(process.env.NODE_ENV);
app.listen(9000, () => console.log("Listening to port 9000"));
