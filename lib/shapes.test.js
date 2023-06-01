const {Shape, square, triangle, circle} = require("./shapes");

describe('shape class', () => {
    describe('setColor method', () => {
      it('sets color', () => {
        const myshape = new Shape();
        myshape.setColor('red');
        expect(myshape.color).toBe('red');
      });
    });
  
    describe('render method', () => {
      it('returns an empty string', () => {
        const shape = new Shape();
        expect(shape.render()).toBe('');
      });
    });
  });

  describe('circle class', () => {
    describe('render method', () => {
      it('should render a colored circle', () => {
        const mycircle = new circle();
        mycircle.setColor('blue');
        expect(mycircle.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue" />');
      });
    });
  });

  describe('square class', () => {
    describe('render method', () => {
      it('should render a colored square', () => {
        const mysquare = new square();
        mysquare.setColor('red');
        expect(mysquare.render()).toBe(`<rect x="50" y="50" width="200" height="200" fill="red" />`);
      });
    });
  });

  describe('triangle class', () => {
    describe('render method', () => {
      it('should render a colored triangle', () => {
        const mytriangle = new triangle();
        mytriangle.setColor('yellow');
        expect(mytriangle.render()).toBe(`<polygon points ="150, 18 244, 182 56. 182" fill="yellow" />`);
      });
    });
  });