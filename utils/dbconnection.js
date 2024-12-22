const mongoose = require("mongoose");

const dbconnect = async (dburi) => {
  await mongoose.connect(dburi);
};

module.exports = dbconnect;
