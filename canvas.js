const SCALE = 50;
const CENTER_X = 300;
const CENTER_Y = 250;

canvas = document.getElementById('geometryCanvas');
ctx = canvas.getContext('2d');
buttonAnim = document.getElementById('startAnimBtn');

isAnimating = false;
time = 0;
strokeColor = "#172A45";

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawAxes();

    ctx.fillStyle = `hsl(${time * 50}, 70%, 60%)`; 
    drawRect(0, -2, 2, 1);

    ctx.save();
    translateTo( -1.5, -1.5 );
    ctx.rotate(time * 2);
    translateTo( 1.5, 1.5 );
    ctx.fillStyle = "#FF6B6B";
    drawRect(-2, -2, 1, 1, true);
    ctx.restore();

    let pulseR = 1 + Math.sin(time * 3) * 0.2;
    ctx.fillStyle = "#00F5D4";
    drawCircle(-2, -1, pulseR);

    let moveX = -2 + Math.sin(time * 2) * 0.5;
    ctx.fillStyle = "#8892B0";
    drawRect(moveX, 0, 1, 1);

    ctx.save();
    ctx.globalAlpha = 0.5 + Math.sin(time * 2) * 0.4;
    ctx.fillStyle = "#E6F1FF";

    ctx.beginPath();
    ctx.ellipse(toScreenX(-1), toScreenY(1.5), 1 * SCALE, 0.5 * SCALE, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = "rgba(0, 245, 212, 0.3)";
    drawCircle(3, 0, 2);

    let growH = 1 + Math.abs(Math.sin(time * 2)) * 0.5;
    ctx.fillStyle = "#FF6B6B";
    drawRect(4, 1, 1, growH);

    drawLabels();
}

function toScreenX(x) { 
    return CENTER_X + x * SCALE; 
}

function toScreenY(y) { 
    return CENTER_Y + y * SCALE; 
}

function translateTo(x, y) {
    ctx.translate(x * SCALE, y * SCALE);
}

function drawRect(x, y, w, h, absolute = false) {
    ctx.beginPath();
    if (absolute) {
        ctx.rect(-w*SCALE/2, -h*SCALE/2, w*SCALE, h*SCALE);
    } else {
        ctx.rect(toScreenX(x), toScreenY(y), w * SCALE, h * SCALE);
    }
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2;
    ctx.stroke();
}

function drawCircle(x, y, r) {
    ctx.beginPath();
    ctx.arc(toScreenX(x), toScreenY(y), Math.abs(r * SCALE), 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2;
    ctx.stroke();
}

function drawAxes() {
    ctx.strokeStyle = "#E6F1FF";
    ctx.lineWidth = 1;
    ctx.beginPath();

    ctx.moveTo(0, CENTER_Y);
    ctx.lineTo(canvas.width, CENTER_Y);

    ctx.moveTo(CENTER_X, 0);
    ctx.lineTo(CENTER_X, canvas.height);
    ctx.stroke();
}

function drawLabels() {
    ctx.fillStyle = "#E6F1FF";
    ctx.font = "16px Montserrat";
    ctx.textAlign = "center";
    ctx.fillText("X", canvas.width - 20, CENTER_Y + 20);
    ctx.fillText("Y", CENTER_X - 20, canvas.height - 20);
    ctx.fillText("0", CENTER_X - 15, CENTER_Y + 20);
}

function animateLoop() {
    time += 0.03;
    draw();
    requestAnimationFrame(animateLoop);
}

animateLoop();
