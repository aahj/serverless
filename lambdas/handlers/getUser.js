const responses = require("../common/API_RESPONSES");

exports.getUser = async (event) => {
  console.log({ event });
  if (!event.pathParameters || !event.pathParameters.ID) {
    return responses._400({ message: "missing ID param" });
  }
  let ID = event.pathParameters.ID;
  if (data[ID]) {
    return responses._200(data[ID]);
  }
  return responses._404({ message: "ID not found" });
};

const data = {
  1234: { name: "Anna Jones", age: 25, job: "journalist" },
  7893: { name: "Chris Smith", age: 52, job: "teacher" },
  5132: { name: "Tom Hague", age: 23, job: "plasterer" },
};
