const { createPromptModule } = require('inquirer');
const fs = require("fs");

const {Shape, triangle, circle, square} = require("./lib/shapes");

const shapechoices = ["circle", "triangle", "square"];


function promptUser() {
    const prompt = createPromptModule();
    return prompt([
         {
         type: 'input',
         name: 'letters',
         message:'Enter up to 3 letters for your logo'
         
         },
         {
             type: 'input',
             name: 'textcolor',
             message:'Enter a color keyword or hexadecimal code for the logo text color'
         },
         {
             type: 'list',
             name: 'shape',
             message:'Choose a shape for your logo',
             choices: shapechoices,
         },
         {
             type: 'input',
             name: 'logocolor',
             message:'Enter a color keyword or hexadecimal code for the logo shape color'
         },
     ]);
   };
 
 


   const generateSVG = (text, textColor, shape, shapeColor) => {
    let shapeInstance;
    switch (shape) {
      case 'circle':
        shapeInstance = new circle();
        break;
      case 'triangle':
        shapeInstance = new triangle();
        break;
      case 'square':
        shapeInstance = new square();
        break;
      default:
        console.log('Invalid shape.');
        return;
    }
  
    shapeInstance.setColor(shapeColor);
  
    const svg = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeInstance.render()}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
  
    return svg;
  };
  
  const saveSVGToFile = (svg) => {
    fs.writeFile('logo.svg', svg, (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  };
  
  promptUser().then((answers) => {
    const svg = generateSVG(answers.letters, answers.textcolor, answers.shape, answers.logocolor);
    saveSVGToFile(svg);
  });