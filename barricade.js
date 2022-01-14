
class Barricade { 

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = "rgb(90, 70, 148)";
    }

    draw() {
        canvas.fillStyle = this.color;
        canvas.fillRect(this.x, this.y, this.w, this.h);
    }

}
