let text = document.querySelector("#txt");
const submit = document.querySelector("#submit");
const resumeBtn = document.querySelector("#resume");
const pauseBtn = document.querySelector("#pause");

let audioMessage;

submit.addEventListener("click", () => {
    audioMessage.text = text.value;
    // *Window speak the text
    window.speechSynthesis.speak(audioMessage);
});

resumeBtn.addEventListener("click", () => {
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
    // *resume the audio if it is paused
    if (speechSynthesis.pause) {
        speechSynthesis.resume();
    }
})

pauseBtn.addEventListener("click", () => {
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
    // *pause if speaking
    speechSynthesis.speaking ? speechSynthesis.pause() : "";
})

window.onload = () => {
    resumeBtn.style.display = "none";
    if ("speechSynthesis" in window) {
        audioMessage = new SpeechSynthesisUtterance();
    } else {
        alert("Speech Synthese is not supported")
    }
}