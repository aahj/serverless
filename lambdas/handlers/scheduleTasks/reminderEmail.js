const AWS = require("aws-sdk");
const responses = require("../../common/API_RESPONSES");

const SES = new AWS.SES();

exports.handler = async (event) => {
  const message = "Hey John, do not forget to shoot next Youtube video";
  const params = {
    Destination: {
      ToAddresses: ["john@example.com"],
    },
    Message: {
      Body: {
        Text: { Data: message },
      },
      Subject: { Data: "Reminder Email" },
    },
    Source: "admin@example.com",
  };
  try {
    await SES.sendEmail(params).promise();
    return responses._200({ message: "email sent" });
  } catch (error) {
    console.log({ error });
    return responses._400({ message: "Failed to send the email" });
  }
};
