const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

exports.SendMsg = async (output, number) => {
    try {
        const message = await client.messages.create({
            body: output,
            to: number,
            messagingServiceSid: process.env.TWILIO_MESSAGE_SERVICES_SID,
        });

        console.log("SMS Sent:", message.sid);
    } catch (error) {
        console.error("SMS Sending Error:", error);
    }
};
