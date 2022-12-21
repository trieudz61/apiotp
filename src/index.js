const express = require("express");
const path = require("path");
const app = express();
const route = require("./routes/index");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
route(app);
app.listen(3000);
