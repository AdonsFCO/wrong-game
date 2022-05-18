class environment
{
    /**
     * 
     * @param {string} canvas 
     * This is where our emviroment is going to be draw. It should be a tagg added for example # for id  
     */
    constructor(canvas, floor)
    {   
        this.canvas = document.querySelector(canvas);
        this.canvas.setAttribute("style",
        `
        background:blue;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        z-index: -5000;

        `);
        this.floor = document.querySelector(floor);
        this.floor.setAttribute("style", `
        width: 50%; 
        heigth: 50%;
        z-index: 300;
        background: green;`)


        }


}


export default environment;