const express = require("express");
const cors = require("cors");
const path = require("path");
const RegistrationQueue = require("./lib/RegistrationQueue");

const app = express();
app.use(cors());
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

const port = process.env.PORT || 9000;

app.use("/", express.static(path.join(__dirname, "..", "dist")));

app.listen(port, () => console.log(`Listening to port ${port}`));
