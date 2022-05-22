class Canvas
{/**
 * 
 * @param {string} tagName -The name of the tag that is going to act as a canvas its always going to take 100% of the visible screen
 */
  constructor(tagID, size = {width: 0, height: 0})
  {
    this.canvas = document.getElementById(tagID);
    this.size = size;
  }

}

export default {Canvas}; 



