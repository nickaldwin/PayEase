const express = require("express");
const router = express.Router();
const authControler = require("../controllers/auth.js");
const homeController = require("../controllers/home.js");

router.get("/", homeController.index);

