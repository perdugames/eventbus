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
     
    TEST_F('TestOnceCheckListenerCountOfEvent', () => {
        const eventBus = new EventBus();
    
        const expectedQuantityListeners = 1;
    
        eventBus.once('event1', function() {});
    
        const actualQuantityListeners = eventBus.getListenerCountOfEvent('event1');
        
        CHECK_ACTUAL_EQUAL_EXPECTED(actualQuantityListeners, expectedQuantityListeners);
    }),
     
    TEST_F('TestOnCheckListenerCountOfEvent', () => {
        const eventBus = new EventBus();
    
        const expectedQuantityListeners = 1;
    
        eventBus.on('event1', function() {});
    
        const actualQuantityListeners = eventBus.getListenerCountOfEvent('event1');
        
        CHECK_ACTUAL_EQUAL_EXPECTED(actualQuantityListeners, expectedQuantityListeners);
    }),
     
    TEST_F('TestOffCheckListenerCountOfEvent', () => {
        const eventBus = new EventBus();
    
        const expectedQuantityListeners = 1;
    
        const listener1 = function() {};
        const listener2 = function() {};
    
        eventBus.on('event1', listener1);
        eventBus.on('event1', listener2);
    
        eventBus.off('event1', listener1);
    
        const actualQuantityListeners = eventBus.getListenerCountOfEvent('event1');
        
        CHECK_ACTUAL_EQUAL_EXPECTED(actualQuantityListeners, expectedQuantityListeners);
    }),
     
    TEST_F('TestOnAndEmitWithoutArgsCheckChangeMockObjInListenerFunction', () => {
        const eventBus = new EventBus();
        const mockX = {x: 0};
    
        const expectedX = mockX.x + 1;
    
        eventBus.on('event1', function() { mockX.x++; });
        eventBus.emit('event1');
    
        const actualX = mockX.x;

        CHECK_ACTUAL_EQUAL_EXPECTED(actualX, expectedX);
    }),
     
    TEST_F('TestOnceAndEmitWithoutArgsCheckChangeMockObjInListenerFunction', () => {
        const eventBus = new EventBus();
        const mockX = {x: 0};
    
        const expectedX = mockX.x + 1;
    
        eventBus.once('event1', function() { mockX.x++; });
        eventBus.emit('event1');
        eventBus.emit('event1');
    
        const actualX = mockX.x;

        CHECK_ACTUAL_EQUAL_EXPECTED(actualX, expectedX);
    }),
     
    TEST_F('TestOnAndEmitWithOneArgCheckChangeMockObjInListenerFunction', () => {
        const eventBus = new EventBus();
        const mockX = {x: 0};
    
        const expectedX = mockX.x + 1;
    
        eventBus.on('event1', function(obj) { obj.x++; });
        eventBus.emit('event1', mockX);
    
        const actualX = mockX.x;

        CHECK_ACTUAL_EQUAL_EXPECTED(actualX, expectedX);
    }),

    TEST_F('TestOnAndEmitWithThreeArgsCheckSumMocksObjInListenerFunction', () => {
        const eventBus = new EventBus();
        const x = 1;
        const y = 1;
        const mockSum = { sum: 0 };
    
        const expectedSumXY = x + y;
    
        eventBus.on('event1', function(_x, _y, sum) { 
            sum.sum = _x + _y;
        });
        eventBus.emit('event1', x, y, mockSum);
    
        const actualSumXY = mockSum.sum;

        CHECK_ACTUAL_EQUAL_EXPECTED(actualSumXY, expectedSumXY);
    }),
     
    
     
);