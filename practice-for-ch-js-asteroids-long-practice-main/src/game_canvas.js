document.addEventListener("DOMContentLoaded", () => {
    const canvasGame = document.getElementById("game-canvas")
    canvasGame.width = 500;
    canvasGame.height = 500;

    const ctx = canvasGame.getContext("2d");

    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, 200, 200);

    // ctx.fillStyle = "black";
    // ctx.fillRect(0, 0, 400, 400);

})

module.exports = GameCanvas;
