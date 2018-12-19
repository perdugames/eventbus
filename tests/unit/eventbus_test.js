require('../cacau-1.1.0.js');

import EventBus from 'LIB/eventbus.js';

TEST('eventbus_test.js',
     
    TEST_F('TestGetListenerCountOfEventCheckEventListenersLength', () => {
        const eventBus = new EventBus();
    
        const expectedQuantityListeners = 1;
    
        const listener1 = function() {};
        eventBus.events['event1'] = []listener1;
    
        const actualQuantityListeners = eventBus.getListenerCountOfEvent();
        
        CHECK_ACTUAL_EQUAL_EXPECTED(actualQuantityListeners, expectedQuantityListeners);
    }),
     
);
