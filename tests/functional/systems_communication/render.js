const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const showText = (ctx, configText) => {
    ctx.clearRect(100, 150, 400, 250);
    ctx.font = configText.fontSize + 'px Arial';
    ctx.fillStyle = configText.color;
    ctx.textAlign = 'center';
    ctx.fillText(configText.text, configText.x, configText.y);
};