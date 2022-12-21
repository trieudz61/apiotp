const express = require("express");
const router = express.Router();
const apiController = require("../app/controllers/apicontroller");
router.get("/api/getsim", apiController.getsim);
module.exports = router;
