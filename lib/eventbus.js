function EventBus() {
    this.events = Object.create(null);
}

EventBus.prototype.getListenerCountOfEvent = function(eventName, memberFunction) {
    return this.events[eventName].length;
}

export default EventBus;
