const mongoose = require("mongoose");

const CodeSchema = mongoose.Schema(
  {
    user_Id: {
      type: mongoose.mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    title: {
      type: String,
    },
    lang: {
      type: Number,
    },
    code: {
      type: String,
    },
  },
  {
    timestams: true,
  }
);

module.exports = mongoose.model("code", CodeSchema);
