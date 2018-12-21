const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const showImage = (ctx, img) => {
    ctx.drawImage(img, 0, 0, 500, 500);
};

const showText = (ctx, configText) => {
    ctx.font = configText.fontSize + 'px FippsRegular';
    ctx.fillStyle = configText.color;
    ctx.textAlign = 'center';
    ctx.fillText(configText.text, configText.x, configText.y);
};