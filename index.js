function toSpeech() {
    try {
        const text = $("#input").val() || "Write something you piece of shit.";
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = text;
        utterance.pitch = 1;
        utterance.volume = 1000;
        window.speechSynthesis.speak(utterance);
    } catch(e) {
        alert(e.message);
    }
}