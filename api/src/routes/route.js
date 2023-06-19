const express = require("express");
const { createUser } = require("../controllers/user");

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  try {
    const response = await createUser(req.body);
    return res.send(response);
  } catch (error) {
    return res.status(403).send(error.toString());
  }
});

module.exports = userRouter;
