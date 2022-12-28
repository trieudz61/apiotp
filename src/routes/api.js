const express = require("express");
const router = express.Router();
const apiController = require("../app/controllers/apicontroller");
router.get("/getsim", apiController.getSim);
router.get("/getotp", apiController.getOTP);
router.get("/getallservices", apiController.getServices);
router.get("/history", apiController.getHistory);
module.exports = router;
