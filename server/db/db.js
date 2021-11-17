const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGO_URI, {});gut push
    await mongoose.createConnection(process.env.MONGO_URI).asPromise();

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
