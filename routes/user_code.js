const express = require("express");

const router = express.Router();

const {
  UserCodes,
  getcode,
  savecode,
  deletecode,
} = require("../controller/user_code");

router.get("/", UserCodes);

router.route("/:id").get(getcode).delete(deletecode);
router.post("/", savecode);

module.exports = router;
