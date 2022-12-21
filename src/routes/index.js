const api = require("./api");
function route(app) {
  app.use("/", api);
}
module.exports = route;
