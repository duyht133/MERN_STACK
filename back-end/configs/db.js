const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
    });
    console.log("DB connection success");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = { connectDB };
