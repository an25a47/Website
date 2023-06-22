var localVideo = document.getElementById('localVideo');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        localVideo.srcObject = stream;
    });

// WebRTC code here (you will need to set up signaling, STUN/TURN, etc.)

