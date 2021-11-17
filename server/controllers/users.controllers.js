const User = require("../model/users.model");
const ErrorResponse = require("../utils/errorResponse");
const crypto = require("crypto");

exports.register = async (req, res) => {
  const { first_name, last_name, email, password, state_residence } = req.body;

  try {
    const user = await User.create({
      first_name,
      last_name,
      email,
      password,
      state_residence,
    });
    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return new ErrorResponse("Input email or password", 400);

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user)
      res.status(404).json({ success: false, message: "user not found" });
    else {
      const isMatch = await user.matchPasswords(password);
      isMatch
        ? sendToken(user, 200, res)
        : res.status(404).json({ success: false, message: "user not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({
    success: true,
    token,
    userId: user._id,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
  });
};
