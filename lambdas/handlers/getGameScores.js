const responses = require("../common/API_RESPONSES");
const Dynamo = require("../common/Dynamo");
const tableName = process.env.tableName;

exports.handler = async (event) => {
  if (!event.pathParameters.game) {
    return responses._400({ message: "missing game param" });
  }
  const game = event.pathParameters.game;
  const gamePlayers = await Dynamo.query({
    tableName,
    index: "game-index",
    queryKey: "game",
    queryValue: game,
  }).catch((err) => {
    console.log("err in Dynamo query - ", err);
    return null;
  });

  return responses._200({ gamePlayers });
};
