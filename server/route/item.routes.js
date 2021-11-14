const express = require("express");
const router = express.Router();
const Item = require("../controllers/item.controller");

const { create } = Item;

router.route("/create").post(create);
// router.route("/login").post(login);

module.exports = router;
