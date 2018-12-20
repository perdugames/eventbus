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



export default EventBus;