require('../cacau-1.1.0.js');

import EventBus from 'LIB/eventbus.js';

TEST('EventBus',
     
    TEST_F('TestGetListenerCountOfEventCheckEventListenersLength', () => {
        const eventBus = new EventBus();
    
        const expectedQuantityListeners = 1;
    
        const listener1 = function() {};
        eventBus.events['event1'] = [listener1];
    
        const actualQuantityListeners = eventBus.getListenerCountOfEvent('event1');
        
        CHECK_ACTUAL_EQUAL_EXPECTED(actualQuantityListeners, expectedQuantityListeners);
    }),
     
    TEST_F('TestOnceCheckEvents', () => {
        const eventBus = new EventBus();
    
        const expectedQuantityListeners = 1;
    
        eventBus.once('event1', function() {});
    
        const actualQuantityListeners = eventBus.getListenerCountOfEvent('event1');
        
        CHECK_ACTUAL_EQUAL_EXPECTED(actualQuantityListeners, expectedQuantityListeners);
    }),
     
);
