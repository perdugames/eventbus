function WaterSystem(name, eventBus) {
    this.name = name;
    this.eventBus = eventBus;
}

WaterSystem.prototype.init = function() {
    showText(ctx, { text: ' Calm Ocean...', fontSize: 22, color: 'black', x: 250, y: 200 });
    
    eventBus.on('startedWind', function(windIntensity) {
        const text = windIntensity + ' Rough Ocean!';
        showText(ctx, { text: text, fontSize: 22, color: 'black', x: 250, y: 200 });
    });
}