import Listener from './listener.js';

function EventBus() {
    this.events = Object.create(null);
}

EventBus.prototype.getListenerCountOfEvent = function(eventName) {
    return this.events[eventName].length;
}

EventBus.prototype.once = function(eventName, listenerFunction) {
    if(this.events[eventName] === undefined)
        this.events[eventName] = [];
    
    if(this.events['addListener'] !== undefined)
        this.emit('addListener', eventName);
    
    this.events[eventName].push(new Listener(listenerFunction, true));
    
    return this;
}

EventBus.prototype.on = function(eventName, listenerFunction) {
    if(this.events[eventName] === undefined)
        this.events[eventName] = [];
    
    if(this.events['addListener'] !== undefined)
        this.emit('addListener', eventName);
    
    this.events[eventName].push(new Listener(listenerFunction));
    
    return this;
}

EventBus.prototype.off = function(eventName, listenerFunction) {
    const listenerIndex = this.events[eventName].findIndex((el) => el.fn === listenerFunction);

    if(listenerIndex > -1)
        this.events[eventName].splice(listenerIndex, 1);
    
    if(this.events['removeListener'] !== undefined)
        this.emit('removeListener', eventName);
        
    if(!this.events[eventName].length)
       this.events[eventName] = undefined;
    
    return this;
}



export default EventBus;