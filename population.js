
class Population {

    constructor(x, y) {
        this.x = x; 
        this.y = y;
        this.rockets = [];
    }

    generateStartingRockets() {
        for (let i = 0; i < POPULATION_SIZE; i++) {
            this.rockets.push(new Rocket(this.x, this.y));
        }
    }

    draw() {
        for (let i = 0; i < this.rockets.length; i++) {
            this.rockets[i].draw();
        }
    }

    update() {
        for (let i = 0; i < this.rockets.length; i++) {
            this.rockets[i].update();
        }
    }
}
