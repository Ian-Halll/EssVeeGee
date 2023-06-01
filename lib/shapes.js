class Shape {
    constructor() {
        this.color="";
    }

    setColor(color){
        this.color = color;
    }

    render(){

        return "";
    }
}

class circle extends Shape {
    constructor() {
      super();
    }
  
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class triangle extends Shape {
    constructor() {
      super();
    }
  
    render() {
      return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
  }
  
  class square extends Shape {
    constructor() {
      super();
    }
  
    render() {
      return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
  }

module.exports = {Shape, square, triangle, circle};