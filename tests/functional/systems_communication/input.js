const addEventKeypress = (key, eventCallback) => {
    document.addEventListener('keypress', function(e) {
        const keyCode = e.which || e.keyCode;
        if(keyCode === key)
            eventCallback();
    }); 
};