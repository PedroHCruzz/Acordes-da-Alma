document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("backgroundMusic");

    audio.play().catch((error) => {
        console.log("O áudio foi bloqueado pelo navegador, aguardando interação.");
    });

    document.getElementById("audioControl").addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            document.getElementById("audioControl").textContent = "🔊"; 
        } else {
            audio.pause();
            document.getElementById("audioControl").textContent = "🔇"; 
        }
    });
});

audio.volume = 1.0; 
audio.muted = false;
src="script.js"