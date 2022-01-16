const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 5000;
const url = "mongodb://localhost:27017/airline";
const UserSchema = require("./model/userModel");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "static")));
app.use(cors());

//  database connected
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to db");
  }
);

app.post("/register", async (req, res) => {
  const { fullname, phone, email, password } = req.body;
  try {
    let user = await UserSchema({
      fullname,
      phone,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    console.log("hello");
    await user.save().then((doc) => res.status(200).send(doc));
  } catch (err) {
    console.log(err.message);
    res.status(404).send({ message: "something went wrong" });
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await UserSchema.findOne({ email });
    if (!user) {
      res.status(400).send({ message: "User not exised" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).send({ message: "Incorrect Password" });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(payload, "nothing", { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.status(200).json({ token });
    });
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});

// server started
app.listen(port, () => {
  console.log(`Server is started on ${port}`);
});
