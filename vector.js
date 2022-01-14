
class Vector {
    constructor(x = Math.random() * 2 - 1, y = Math.random() * 2 - 1) {
        this.x = x;
        this.y = y;
    }

    sum(vec) {
        this.x += vec.x;
        this.y += vec.y;
    }

    capSize(maxSize) {
        let size = Math.sqrt(this.x ** 2 + this.y ** 2);
        if (size > maxSize) {
            let coeficient = maxSize / size;
            this.x *= coeficient;
            this.y *= coeficient;
        }
    }
}