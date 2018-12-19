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
    
    this.events[eventName].push(new Listener(listenerFunction, true));
}

export default EventBus;