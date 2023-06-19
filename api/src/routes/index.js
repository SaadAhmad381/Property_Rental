const express = require("express");
const userRouter = require("./route");

const router = express.Router();

console.log("I'm router");

router.use("/auth", userRouter);

module.exports = router;
