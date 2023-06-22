// Similar changes as in main.js

function sendMessage(message) {
    if (connection) {
        connection.sendUTF(JSON.stringify(message));
    }
}

const connection = new WebSocket('ws://localhost:3000');

connection.onmessage = message => {
    const data = JSON.parse(message.data);

    if (data.offer) {
        startPeerConnection(data.offer);
    } else if (data.candidate) {
        peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
    }
};
