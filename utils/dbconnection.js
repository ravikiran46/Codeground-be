const mongoose = require("mongoose");

const dbconnect = async (dburi) => {
  try {
    await mongoose.connect(dburi);
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbconnect;
