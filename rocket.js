
class Rocket {

    constructor(x, y) {
        this.pos = new Vector(x, y);
        this.vel = new Vector(0, 0);
        this.moving = true;
        this.r = 4;
        this.color = 'rgb(6, 188, 53)';
    }

    draw() {
        canvas.fillStyle = this.color;
        canvas.beginPath();
        canvas.arc(this.pos.x, this.pos.y, this.r, 0, 2*Math.PI);
        canvas.fill();
    }

    update() {
        this.move();
        this.checkCollision();
    }

    move() {
        if (this.moving) {
            this.vel.sum(new Vector());
            this.vel.capSize(MAX_ROCKET_SPEED);
            this.pos.sum(this.vel)
        }
    }

    checkCollision() {
        if (this.pos.x < 0 || this.pos.y < 0 || this.pos.x > FRAME_WIDTH || this.pos.y > FRAME_HEIGHT ) { 
            this.moving  = false;
        }

        if (this.pos.x > barricade.x && this.pos.x < barricade.x + barricade.w && this.pos.y > barricade.y && this.pos.y < barricade.y + barricade.h) {
            this.moving = false;
        }
    }
}
