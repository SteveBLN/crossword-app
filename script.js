const canvas = document.getElementById("crossword");
const ctx = canvas.getContext("2d");

const gridSize = 40;
const rows = 10;
const cols = 15;

canvas.width = cols * gridSize;
canvas.height = rows * gridSize;

const words = [
    { word: "DSLAnbieter", row: 1, col: 0, direction: "ACROSS" },
    { word: "Confluence", row: 2, col: 0, direction: "ACROSS" },
    { word: "Vertragszusammenfassung", row: 3, col: 0, direction: "ACROSS" },
    { word: "MagentaEins", row: 4, col: 0, direction: "ACROSS" },
    { word: "Nacharbeit", row: 5, col: 0, direction: "ACROSS" },
    { word: "Kabelanbieter", row: 6, col: 0, direction: "ACROSS" },
    { word: "Umbuchen", row: 7, col: 0, direction: "ACROSS" },
    { word: "KombiRabatt", row: 8, col: 0, direction: "ACROSS" },
    { word: "Highspeed", row: 9, col: 0, direction: "ACROSS" }
];

// Draw Grid
function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "black";

    for (let i = 0; i <= rows; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.width, i * gridSize);
        ctx.stroke();
    }

    for (let i = 0; i <= cols; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.stroke();
    }
}

// Draw Words
function drawWords() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";

    words.forEach((entry) => {
        let { word, row, col, direction } = entry;
        for (let i = 0; i < word.length; i++) {
            let x = col + (direction === "ACROSS" ? i : 0);
            let y = row + (direction === "DOWN" ? i : 0);
            ctx.fillText(word[i], x * gridSize + 10, y * gridSize + 30);
        }
    });
}

// Initialize the crossword
drawGrid();
drawWords();
