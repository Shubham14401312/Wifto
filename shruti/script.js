function showMessage(action) {
    let message = "";
    if (action === "quiz") {
        message = "🎓 Quiz Time! Test your eco-knowledge.";
    } else if (action === "challenge") {
        message = "🔥 New Challenge! Reduce plastic for 1 week.";
    } else if (action === "plant") {
        message = "🌱 Great choice! Planting a tree helps the Earth.";
    }
    document.getElementById("message-text").innerText = message;
}
