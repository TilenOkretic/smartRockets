
class Goal { 

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 10;
        this.color = "rgb(109, 85, 18)";
    }

    draw() {
        canvas.fillStyle = this.color;
        canvas.beginPath();
        canvas.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        canvas.fill();
    }

}
