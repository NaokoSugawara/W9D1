import MovingObject from "./moving_object.js";


document.addEventListener("DOMContentLoaded", () => {
    const canvasGame = document.getElementById("game-canvas")
    canvasGame.width = 500;
    canvasGame.height = 500;

    const ctx = canvasGame.getContext("2d");

    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, 200, 200);

    window.MovingObject = MovingObject;

    const moo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
      });

    window.moo = moo;
    

})



console.log("Webpack is working!");

// import MovingObject from "./moving_object.js";




