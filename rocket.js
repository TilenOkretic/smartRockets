
class Rocket {

    constructor(x, y) {
        this.pos = new Vector(x, y);
        this.vel = new Vector(0, 0);
        this.moving = true;
        this.r = 4;
        this.c = 'rgb(6, 188, 53)';
    }

    draw() {
        canvas.fillStyle = this.color;
        canvas.begiPath();
        canvas.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        canvas.fill();
    }
}
