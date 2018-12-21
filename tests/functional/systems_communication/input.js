const addEventKeypress = (key, eventCallback) => {
    document.addEventListener('keypress', function(e) {
        const keyCode = e.which || e.keyCode;
        if(keyCode === key)
            eventCallback();
    }); 
};

//showImage(ctx, assets.img);
//    
//    showText(ctx, { text: 'Press enter to enter:', fontSize: 22, color: 'black', x: 250, y: 70 });
//    
//    const keyCodeEnter = 13;
//    addEventKeypress(keyCodeEnter, () => {
//        showText(ctx, { text: 'It\'s closed, please try again.', fontSize: 16, color: 'red', x: 250, y: 350 });
//        playAudio(assets.beat) 
//    });