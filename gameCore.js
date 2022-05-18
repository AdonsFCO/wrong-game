import player from "./assets/scripts/player/player.js";
import environment from "./assets/scripts/world/environment.js";


const gameLoop = () =>
{
       
        setInterval(()=>{console.log("1frame")},16.66666666666667);  
        /*
        60 fps = 66666666666667 
        30fps = 8.333333333333333;*/

}

let env = new environment("#environment","#floor");

let player1 = new player("5px","#player")
player1.draw();

// gameLoop()