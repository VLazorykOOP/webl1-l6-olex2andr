function setAudio() {
    selector = document.getElementById('audioSelect');
    player = document.getElementById('myAudio');
    
    if (selector.value) {
        player.src = selector.value;
        player.play();
        
        player.style.boxShadow = "0 0 20px #FF6B6B";
    }
}

function setVideo() {
    selector = document.getElementById('videoSelect');
    player = document.getElementById('myVideo');
    
    if (selector.value) {
        player.src = selector.value;
        player.play();
        
        player.style.boxShadow = "0 0 20px #00F5D4";
    }
}

function checkVideoSupport() {
    resultDiv = document.getElementById('checkVideoResult');
    testVideo = document.createElement('video');
    
    output = "";

    if (testVideo.canPlayType) {
        ogg = testVideo.canPlayType('video/ogg; codecs="theora, vorbis"');
        output += `OGG (Theora): ${ogg === "" ? "Не підтримується" : ogg}<br>`;

        mp4 = testVideo.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
        output += `MP4 (H.264): ${mp4 === "" ? "Не підтримується" : mp4}<br>`;

        webm = testVideo.canPlayType('video/webm; codecs="vp8, vorbis"');
        output += `WebM (VP8): ${webm === "" ? "Не підтримується" : webm}`;
        
        resultDiv.style.color = "#00F5D4";
        resultDiv.innerHTML = output;
    } else {
        resultDiv.style.color = "#FF6B6B";
        resultDiv.innerHTML = "Ваш браузер застарів і не підтримує HTML5 Video.";
    }
}
