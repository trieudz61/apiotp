const axios = require("axios");

class apiController {
  getsim = async (req, res, next) => {
    console.log(req.query);
    // const callbackData = await getNewSim();
    // console.log(callbackData);
    res.send(req.query);
  };
}

let getNewSim = async (query1,query2) => {
  return new Promise(async (resolve, reject) => {
    try {
      await axios({
        method: "get",
        url: "https://api.viotp.com/request/getv2?token=f247344c40df47ceb7ecf9371b32c860&serviceId=45&network=",
      }).then((res) => {
        resolve(res.data);
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = new apiController();
