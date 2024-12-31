const express = require("express");

const router = express.Router();

const {
  UserCodes,
  getcode,
  savecode,
  deletecode,
  updatecode,
} = require("../controller/user_code");

router.get("/all", UserCodes);

router.route("/:id").delete(deletecode);
router.route("/").get(getcode).post(savecode).put(updatecode);

module.exports = router;
