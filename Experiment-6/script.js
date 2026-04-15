// Change heading text
function changeText() {
    let input = document.getElementById("userInput").value;
    let heading = document.getElementById("mainHeading");
    heading.innerHTML = input;
}

// Change background color
function changeColor() {
    let colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Increase font size
function increaseFontSize() {
    let paragraph = document.getElementById("paragraph");
    let currentSize = parseInt(paragraph.style.fontSize) || 16;
    paragraph.style.fontSize = (currentSize + 2) + "px";
}

// Show/Hide paragraph
function toggleParagraph() {
    let paragraph = document.getElementById("paragraph");
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}

// Reset page
function resetPage() {
    document.getElementById("mainHeading").innerHTML = "Welcome to JavaScript Lab";
    document.getElementById("paragraph").style.display = "block";
    document.getElementById("paragraph").style.fontSize = "16px";
    document.body.style.backgroundColor = "#f4f4f4";
    document.getElementById("userInput").value = "";
}

// Attach functions to buttons
document.getElementById("changeTextBtn").onclick = changeText;
document.getElementById("bgColorBtn").addEventListener("click", changeColor);
document.getElementById("fontSizeBtn").onclick = increaseFontSize;
document.getElementById("toggleBtn").onclick = toggleParagraph;
document.getElementById("resetBtn").onclick = resetPage;