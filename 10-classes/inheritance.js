class Shape {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    render() {
        console.log('Rendering shape');
    }

}

class Circle extends Shape {

    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }

    static get pi() {
        return 3.14159265359;
    }

    get circumference() {
        return 2 * Circle.pi * this.radius;
    }

    render() {
        console.log('Rendering circle at %d,%d', this.x, this.y);
    }

}

var c = new Circle(20, 10, 50);
console.log(c.x);
c.x = 5;
console.log(c.x);
console.log(Circle.pi);
console.log(c.circumference);
c.render();