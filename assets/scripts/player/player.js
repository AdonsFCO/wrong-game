
class player{
    /**
 * This class represent the the main character that is our drill.
 * @param {string} canvas - This is where our player is going to be draw. It should be a tagg added for example # for id  
 * @param {string} size - Is the size of the player
 */ 
    constructor(size, canvas)
    {   
        this.size = size; 
        this.canvas = document.querySelector(canvas);
    
    
    }
    setStyles()
    {
        this.canvas.setAttribute("style","height:400px;width:300px; background-color: red; z-index:5")

    }


    draw()
    {
        this.setStyles()
    }



}


export default player; 