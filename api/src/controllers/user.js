const User = require("../models/user");
const bcrypt = require("bcrypt");

const createUser = async (data) => {
  let hash;
  const { name, email, password, number } = data;
  const findEmail = await User.findOne({ email }).exec();
  if (findEmail) throw new Error("Email exist. Enter new email");
  const findNumber = await User.findOne({ number }).exec();
  if (findNumber) throw new Error("Number exist. Enter new number");

  try {
    const saltRounds = 10;
    hash = await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.error("Error generating hash:", error);
  }
  console.log("Generated hash:", hash);

  const user = new User({ name, email, password: hash, number });
  await user.save();
  return {
    message: "sign up successfully",
  };
};

module.exports = {
  createUser,
};
