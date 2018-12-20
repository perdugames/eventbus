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
     
    TEST_F('TestEventAddListenerOnCheckChangeMockObjInListenerFunction', () => {
        const eventBus = new EventBus();
        const mockX = {x: 0};
    
        const expectedX = mockX.x + 1;
    
        eventBus.on('addListener', function() { mockX.x++; });
        eventBus.on('event1', function() {});
    
        const actualX = mockX.x;

        CHECK_ACTUAL_EQUAL_EXPECTED(actualX, expectedX);
    }),
     
    TEST_F('TestEventAddListenerOnCheckEventName', () => {
        const eventBus = new EventBus();
        let eventName = '';
    
        const expectedEventName = 'event1';
    
        eventBus.on('addListener', function(_eventName) { eventName = _eventName; });
        eventBus.on('event1', function() {});

        const actualEventName = eventName;

        CHECK_ACTUAL_EQUAL_EXPECTED(actualEventName, expectedEventName);
    }),
     
    TEST_F('TestEventAddListenerOnceCheckChangeMockObjInListenerFunction', () => {
        const eventBus = new EventBus();
        const mockX = {x: 0};
    
        const expectedX = mockX.x + 1;
    
        eventBus.once('addListener', function() { mockX.x++; });
        eventBus.on('event1', function() {});
        eventBus.on('event1', function() {});
    
        const actualX = mockX.x;

        CHECK_ACTUAL_EQUAL_EXPECTED(actualX, expectedX);
    }),
     
    TEST_F('TestEventAddListenerOnceAndEvent1OnceCheckChangeMockObjInListenerFunction', () => {
        const eventBus = new EventBus();
        const mockX = {x: 0};
    
        const expectedX = mockX.x + 1;
    
        eventBus.once('addListener', function() { mockX.x++; });
        eventBus.once('event1', function() {});
    
        const actualX = mockX.x;

        CHECK_ACTUAL_EQUAL_EXPECTED(actualX, expectedX);
    }),
    
    TEST_F('TestEventRemoveListenerOnCheckChangeMockObjInListenerFunction', () => {
        const eventBus = new EventBus();
        const mockX = {x: 0};
    
        const expectedX = mockX.x + 1;
    
        eventBus.on('removeListener', function() { mockX.x++; });
        eventBus.on('event1', function() {});
        eventBus.off('event1', function() {});
    
        const actualX = mockX.x;

        CHECK_ACTUAL_EQUAL_EXPECTED(actualX, expectedX);
    }),
     
    TEST_F('TestGetAllEventsNameCheckArrayNames', () => {
        const eventBus = new EventBus();
    
        const expectedArrayNames = ['event1', 'event2'];
    
        eventBus.on('event1', function() {});
        eventBus.on('event2', function() {});
        
        const actualArrayNames = eventBus.getAllEventsName();
        
        CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(actualArrayNames, expectedArrayNames);
    }),
     
    TEST_F('TestGetAllListenersOfEventCheckArrayListenersLength', () => {
        const eventBus = new EventBus();
    
        const expectedListenersLength = 2;
    
        eventBus.on('event1', function() {});
        eventBus.on('event1', function() {});
        
        const actualListenersLength = eventBus.getAllListenersOfEvent('event1').length;
        
        CHECK_ACTUAL_EQUAL_EXPECTED(actualListenersLength, expectedListenersLength);
    }),
     
    TEST_F('TestRemoveAllListenersOfEventCheckGetAllListenersOfEventReturnUndefined', () => {
        const eventBus = new EventBus();
        
        eventBus.on('event1', function() {});
        eventBus.once('event1', function() {});
        eventBus.on('event1', function() {});
    
        eventBus.removeAllListenersOfEvent('event1');
    
        const actualQuantityListeners = eventBus.getAllListenersOfEvent('event1');

        CHECK_UNDEFINED(actualQuantityListeners);
    })
     
);