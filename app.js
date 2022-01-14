
const FRAME_WIDTH = 1000;
const FRAME_HEIGHT = 800;
const POPULATION_SIZE = 80;
const GENERATION_LENGTH = 100;
const MAX_ROCKET_SPEED = 10;

let canvas;
let population;
let goal;
let barricade;

let main = () => {
    init();
    simulate();
};

let init = () => {
    canvas = initCanvas();
    population = initPopulation();
    goal = initGoal();
    barricade = initBarricade();
};

let simulate = async () => {
    while (true) {
        await simulateGeneration();
    }
};

let simulateGeneration = async () => {
    for (let tick = 0; tick < GENERATION_LENGTH; tick++) {
        draw();
        await sleep(64);
        
    }
};

let initCanvas = () => {
    let c = document.getElementById('canvas');
    c.width  = FRAME_WIDTH;
    c.height  = FRAME_HEIGHT;
    return c.getContext('2d');
};

let initGoal = () => {
    return new Goal(FRAME_WIDTH / 2, FRAME_HEIGHT  * 1 / 10);
};

let initPopulation = () => {
    let p = new Population(FRAME_WIDTH  / 2, FRAME_HEIGHT * 9 / 10);
    p.generateStartingRockets();
    return p;
};

let initBarricade = () => {
    return new Barricade(0, FRAME_HEIGHT, FRAME_WIDTH * 2/3, FRAME_HEIGHT / 20);
};

let draw = () => {
    clearCanvas();
    drawGoal();
    drawBarricade();
    drawPopulation();
};

let clearCanvas = () => {
    canvas.fillStyle = 'black';
    canvas.fillRect(0, 0, FRAME_WIDTH, FRAME_HEIGHT);
};

let drawGoal = () => {

};

let drawBarricade = () => {

};

let drawPopulation = () => {

};

let sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};