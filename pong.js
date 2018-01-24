class Vec {
    constructor(x=0, y=0) {
        this.x = x;
        this.y = y;
    }
};


const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

context.fillStyle = '#000';
context.fillRect(0,0, canvas.width, canvas.height);

context.fillStyle = '#fff';
context.fillRect(0,0, 10, 10);