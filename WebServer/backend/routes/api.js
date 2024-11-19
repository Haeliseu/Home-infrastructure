require ("dotenv").config();
const express = require("express");
const router = express();
const User = require("../controllers/userController");


router.post("/login", User.login);

module.exports = router;
