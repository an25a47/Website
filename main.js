const localVideo = document.getElementById('localVideo');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        localVideo.srcObject = stream;
        startPeerConnection(stream);
    });

function startPeerConnection(stream) {
    const configuration = {
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
    };
    const peerConnection = new RTCPeerConnection(configuration);

    stream.getTracks().forEach(track => {
        peerConnection.addTrack(track, stream);
    });

    peerConnection.createOffer()
        .then(offer => {
            return peerConnection.setLocalDescription(offer);
        })
        .then(() => {
            // Send peerConnection.localDescription to the other peer over your server
        });

    peerConnection.onicecandidate = event => {
        if (event.candidate) {
            // Send the candidate to the other peer over your server
        }
    };
}
