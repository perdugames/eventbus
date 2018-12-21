const eventBus = new EventBus();
const systems = [new WindSystem('wind', eventBus),
                 new WaterSystem('water', eventBus)]

function init() {
    showText(ctx, { text: 'Press enter:', fontSize: 22, color: 'black', x: 250, y: 70 });
    
    for(let i = 0; i < systems.length; i++)
        systems[i].init();
}

init();