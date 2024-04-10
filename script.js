let cv, ctx;
let r = 300;
let width;
let height;
let total = 0;
let circle = 0;
let diff = 1;
let elemPI;

window.onload = () => setup();

const setup = function() {
  r = Number(getUrlParams().r) || r;
  cv = document.querySelector('canvas');
  cv.width = 2 * r + 1;
  cv.height = 2 * r + 1;
  ctx = cv.getContext('2d');
  width = cv.width - 1;
  height = cv.height - 1;
  elemPI = document.getElementById('PI');
  background(cv, 'black');
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'white';
  ctx.strokeRect(0, 0, 2 * r, 2 * r);
  ctx.translate(width / 2, height / 2);
  ctx.ellipse(0, 0, 2 * r, 2 * r, false);
  setInterval(draw, 5);
}

const draw = function() {
  for (let n = 0; n < 1000; n++) {
    let x = random(-r, r);
    let y = random(-r, r);
    total++;
    let dd = x * x + y * y;
    if (dd <= r * r) {
      circle++;
      ctx.strokeStyle = rgb(10, 200, 10);
    } else {
      ctx.strokeStyle = rgb(10, 10, 200);
    }
    let pi = 4 * circle / total;
    if (Math.abs(Math.PI - pi) < diff) {
      diff = Math.abs(Math.PI - pi);
      elemPI.innerHTML = 'PI = ' + pi + ' | Diferença = ' + diff;
    }
    ctx.ellipse(x, y, 1, 1, false);
  }
}