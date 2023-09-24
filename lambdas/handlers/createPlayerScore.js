const responses = require("../common/API_RESPONSES");
const Dynamo = require("../common/Dynamo");
const tableName = process.env.tableName;

exports.handler = async (event) => {
  if (!event.pathParameters || !event.pathParameters.ID) {
    return responses._400({ message: "missing ID param" });
  }
  let ID = event.pathParameters.ID;
  const user = JSON.parse(event.body);
  user.ID = ID;

  const newUser = await Dynamo.write(user, tableName).catch((err) => {
    console.log("err in Dynamo write - ", err);
    return null;
  });
  if (!newUser) {
    return responses._400({ message: "Failed to write user by ID" });
  }
  return responses._200({ newUser });
};
