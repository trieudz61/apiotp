const axios = require("axios");

class apiController {
  getSim = async (req, res) => {
    const dataAPIQuery = req.query.api;
    const dataIdQuery = req.query.id;
    const callbackData = await getNewSim(dataAPIQuery, dataIdQuery);
    res.send(callbackData);
  };
  getOTP = async (req, res) => {
    const dataAPIQuery = req.query.api;
    const dataRequesyIdQuery = req.query.request_id;
    const callbackData = await getOTPFromId(dataAPIQuery, dataRequesyIdQuery);
    res.send(callbackData);
  };
  getServices = async (req, res) => {
    const dataAPIQuery = req.query.api;
    const callbackData = await servicesAvailable(dataAPIQuery);
    if (callbackData.message === "Invalid api key!") {
      res.send(callbackData);
    } else {
      const trueData = [
        {
          id: "1",
          name: "facebook",
          price: "1200",
          timeout: "300",
        },
        {
          id: "2",
          name: "hotmail",
          price: "800",
          timeout: "300",
        },
        {
          id: "3",
          name: "tiktok",
          price: "1000",
          timeout: "300",
        },
        {
          id: "4",
          name: "zalo",
          price: "2000",
          timeout: "300",
        },
        {
          id: "5",
          name: "bigo",
          price: "800",
          timeout: "300",
        },
        {
          id: "6",
          name: "facebook2",
          price: "1200",
          timeout: "300",
        },
      ];
      res.send(trueData);
    }
  };
}
let servicesAvailable = async (query1) => {
  return new Promise(async (resolve, reject) => {
    try {
      await axios({
        method: "get",
        url:
          "http://otptextnow.com/api/?key=" +
          query1 +
          "&action=get_all_services",
      }).then((res) => {
        resolve(res.data);
      });
    } catch (error) {
      reject(error);
    }
  });
};
let getOTPFromId = async (query1, query2) => {
  return new Promise(async (resolve, reject) => {
    try {
      await axios({
        method: "get",
        url:
          "http://otptextnow.com/api/?key=" +
          query1 +
          "&action=get_code&id=" +
          query2 +
          "&service=telegram",
      }).then((res) => {
        resolve(res.data);
      });
    } catch (error) {
      reject(error);
    }
  });
};
let getNewSim = async (query1, query2) => {
  return new Promise(async (resolve, reject) => {
    try {
      await axios({
        method: "get",
        url:
          "http://otptextnow.com/api/?key=" +
          query1 +
          "&action=get_number&id=" +
          query2,
      }).then((res) => {
        resolve(res.data);
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = new apiController();
