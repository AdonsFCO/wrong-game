
import player from "./MotherBridge/assets/scripts/player/player.js";
import environment from "./MotherBridge/world/environment.js";


class GameRunner{
        /**This object is in charge in running the game */
        constructor(frames, game)
        {
          this.frames = frames;
          this.game = game;      
              
        }
       
        run()
        {
                setInterval(()=>{
                        this.game.detectKeyPessed();
                        



                },this.frames);

        
        
        
        
        }

                /*
                60 fps = 66666666666667 
                30fps = 8.333333333333333;*/
        

}
