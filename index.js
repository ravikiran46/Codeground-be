const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbconnect = require("./utils/dbconnection");
const User = require("./routes/user");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;
const dburi = process.env.DB_URI;
dbconnect(dburi)
  .then(() => console.log("connected to db"))
  .catch(() => console.log("cannot connect to db"));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/user", User);

app.listen(PORT, () => console.log(`server started at port ${PORT}`));
