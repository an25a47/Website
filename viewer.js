const remoteVideo = document.getElementById('remoteVideo');

function startPeerConnection() {
    const configuration = {
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
    };
    const peerConnection = new RTCPeerConnection(configuration);

    peerConnection.ontrack = event => {
        remoteVideo.srcObject = event.streams[0];
    };

    // When you receive the offer from the other peer over your server
    peerConnection.setRemoteDescription(offer)
        .then(() => {
            return peerConnection.createAnswer();
        })
        .then(answer => {
            return peerConnection.setLocalDescription(answer);
        })
        .then(() => {
            // Send peerConnection.localDescription back to the other peer over your server
        });

    peerConnection.onicecandidate = event => {
        if (event.candidate) {
            // Send the candidate to the other peer over your server
        }
    };
}
