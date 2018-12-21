function WindSystem(name, eventBus) {
    this.name = name;
    this.eventBus = eventBus;
}

WindSystem.prototype.init = function() {
    const intensities = ['Very', 'Little', 'Too Much'];
   
    const keyCodeEnter = 13;
    addEventKeypress(keyCodeEnter, () => {
        const intensity = Math.floor(Math.random() * intensities.length); 
        eventBus.emit('startedWind', intensities[intensity]);
    });
}