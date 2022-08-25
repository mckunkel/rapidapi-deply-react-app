const axios = require('axios')

export const getTime = () => {
    const time = new Date();
    return time.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
    });
  }
// get uuid from B/E (used for generation of threadId or sessionId)
export const uuid = async () => {
    return (await axios.get("/uuid")).data;
}

// Send data to B/E based on which B/E will initiate REST API call to VAS
export const sendMessage = async (
    msgFamily,
    msgFamilyVersion,
    msgName,
    message,
    threadId,
    qualifier
    )=> {
    if (!threadId) {
        threadId = await uuid();
    }
    await axios.post("/send", {
        msgFamily: msgFamily,
        msgFamilyVersion: msgFamilyVersion,
        msgName: msgName,
        threadId: threadId,
        qualifier: qualifier,
        message: message,
    });
}

// export const setupSocket = (socket,inviteDetailQRCode) =>{
//     socket = io();
//     socket.on("message", async (message) => {
//       this.messages.unshift({
//         content: message,
//         time: getTime(),
//       });
//       // Handle received message differently based on message type
//       switch (message["@type"]) {
//         case "did:sov:123456789abcdefghi1234;spec/relationship/1.0/invitation":
//           inviteDetailQRCode = (
//             await axios.post("/qr", { url: message.inviteURL })
//           ).data;
//           document.getElementById("invite-detail-modal").style.display =
//             "block";
//           break;
//         }
//     });
//   }