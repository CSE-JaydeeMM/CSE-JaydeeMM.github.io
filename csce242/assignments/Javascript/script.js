function showLyrics() {
    const lyricsBox = document.getElementById("lyrics");
    lyricsBox.innerHTML = `
    Here comes the sun <br>
        Sun <br>
            Sun <br>
                Sun <br>
                    Here it comes
    
    `;
}

const colorPicker = document.getElementById("pick");
const colorOutput = document.getElementById("out-color");

colorPicker.addEventListener("input", () => {
    const chosenColor = colorPicker.value;
    colorOutput.textContent = `You Picked: ${chosenColor}`;
    colorOutput.style.color = chosenColor;
});

function imageChange() {
    const img = document.getElementById("img");
    if (img.src.includes("cloudy.png")) {
        img.src = "images/sunny.jpeg";
        img.alt = "sunny";
    } else {
        img.src = "images/cloudy.png";
        img.alt = "cloudy";
    }
}