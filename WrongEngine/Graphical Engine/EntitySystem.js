class Entity
{
  /**
   * You can set an PNG image if you want to or you can define an SVG code to define the object
   * @param {string} width - Represent the width in pixels
   * @param {string} height - Represent the heigth in pixels
   * @param {string} tagID  - The tag name that is going to be drawn on the screen
   * @param {string} imgString - This is the string tha use the source of the image that we are going to draw.
   * @param {object} coordinates - Are the coordinates of the coordinate system
   */
  constructor(width = "300px", height ="300px", tagID, imgString, coordinates = {x:0, y:0})
  {
    this.width = width;
    this.height = height;
    this.entity = document.getElementById(tagID);
    this.imgString  = imgString;
    this.coordinates = coordinates;
    if(this.imgString)
    {
      this.generateImageBySrc()
    }
  }
  /**
   * Generates the entity image based on its source
   */
  generateImageBySrc()
  {
     
    let img = document.createElement("img");
    img.setAttribute("src",this.imgString);
    img.setAttribute("width",this.width);
    img.setAttribute("height",this.height);
    this.entity.appendChild(img);
   
  }

}




export default {Entity}