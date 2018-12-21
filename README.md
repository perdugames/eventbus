# EventBus
## EventBus API in JavaScript.

### How to use EventBus

```javascript

import EventBus from './eventbus-1.0.0.js';

const eventBus = new EventBus();

/* Use "once" for when you want to perform the listener function only once. */
eventBus.once('event1', function(text) {
    console.log(text);
});

eventBus.emit('event1', 'I exist?');
eventBus.emit('event1', 'I exist?');

// Result console: 
//      I exist?


/* Use "on" for when you want to perform the listener function multiple times. */
eventBus.on('event1', function(text) {
    console.log(text);
});

eventBus.emit('event1', 'I exist?');
eventBus.emit('event1', 'I exist?');

// Result console: 
//      I exist?
//      I exist?

```

## API

**eventBus.getListenerCountOfEvent(eventName):** Returns the number of listeners for a given event.

**eventBus.once(eventName, listenerFunction):** Adds a listener to an event that will be called only once, after the function is executed, it is removed from the listeners array of that event.

**eventBus.on(eventName, listenerFunction):** Adds a listener to an event, which will be called every time the event is issued.

**eventBus.off(eventName, listenerFunction):** Removes a listener from a given event.

**eventBus.emit(eventName, args):** Issuing an event, which causes all the listeners functions to be called from the issued event, it is possible to pass arguments so that the listener's functions can access.

**eventBus.getAllEventsName():** Returns all event names in an EventBus.

**eventBus.getAllListenersOfEvent(eventName):** Returns all listeners of a given event.

**eventBus.removeAllListenersOfEvent(eventName):** Removes all listeners from an event.

**Event “addListener” and “removeListener”:** There are two standard EventBus events, "addListener" is issued when a new listener is added to an event, while "removeListener" is called when a listener is removed from an event.


