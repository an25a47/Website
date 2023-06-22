// Add this at the bottom of startPeerConnection function

peerConnection.onicecandidate = event => {
    if (event.candidate) {
        sendMessage({ 'candidate': event.candidate });
    }
};

// Add this function to handle sending messages to the signaling server
function sendMessage(message) {
    if (connection) {
        connection.sendUTF(JSON.stringify(message));
    }
}

// Add this code to establish WebSocket connection
const connection = new WebSocket('ws://localhost:3000');

connection.onmessage = message => {
    const data = JSON.parse(message.data);
    
    if (data.answer) {
        peerConnection.setRemoteDescription(new RTCSessionDescription(data.answer));
    } else if (data.candidate) {
        peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
    }
};
