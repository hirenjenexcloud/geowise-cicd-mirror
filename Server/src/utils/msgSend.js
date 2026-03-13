const twilio = require("twilio");

const accountSid = "AC48c6118b86c91f27b8a3d6a13e500d0f";
const authToken = "b0557b98433458b8453c6fce2d1ea0db";

const client = twilio(accountSid, authToken);

exports.SendMsg = async (output, number) => {
    try {
        const message = await client.messages.create({
            body: output,
            to: number,
            messagingServiceSid: "MG609f569bfe884756008962d0bfc604e2",
        });

        console.log("SMS Sent:", message.sid);
    } catch (error) {
        console.error("SMS Sending Error:", error);
    }
};
