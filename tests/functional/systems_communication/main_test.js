const eventBus = new EventBus();
const systems = [new WindSystem('wind', eventBus)
                 new WaterSystem('water', eventBus)]

function init() {
    for(let i = 0; systems.length; i++)
        systems[i].init();
    
    loop();
}

function update(step) {
    for(let i = 0; systems.length; i++)
        systems[i].update(step);
}

//function render(dt) {
//    
//}

let now = 0;
let dt = 0;
let last = timestamp();
let step = 1/60;
function loop() {
    now = timestamp();
    dt = dt + Math.min(1, (now - last) / 1000);
    while(dt > step) {
        dt = dt - step;
        update(step);
    }
//    render(dt);
    last = now;
    requestAnimationFrame(loop);
}

function timestamp() {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}

init();