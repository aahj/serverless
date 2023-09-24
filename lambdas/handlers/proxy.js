const responses = require("../common/API_RESPONSES");

exports.handler = async (event) => {
  console.log({ event });
  return responses._200();
};
