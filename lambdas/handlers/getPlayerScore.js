const responses = require("../common/API_RESPONSES");
const Dynamo = require("../common/Dynamo");
const tableName = process.env.tableName;

exports.handler = async (event, callback) => {
  // console.log({ event });
  // console.log({ callback });
  if (!event.pathParameters || !event.pathParameters.ID) {
    return responses._400({ message: "missing ID param" });
  }
  let ID = event.pathParameters.ID;
  const user = await Dynamo.get(ID, tableName).catch((err) => {
    console.log("err in Dynamo Get - ", err);
    return null;
  });
  if (!user) {
    return responses._400({ message: "Failed to get user by ID" });
  }
  return responses._200({ user });
};
