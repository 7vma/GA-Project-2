const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User } = require("../models");

// register route
router.get("/register", function (req, res) {
    return res.render("auth/register");
  });

// login route
router.get("/login", function (req, res) {
  res.render("auth/login");
});

module.exports = router;