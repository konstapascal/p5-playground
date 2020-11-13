const slider = document.getElementById('slider');

let sizeX = 50;
let sizeY = 50;

function changeSize() {
	const val = slider.value;

	sizeX = val;
	sizeY = val;
}

slider.addEventListener('click', changeSize);

function setup() {
	createCanvas(1900, 900);
}

function draw() {
	if (mouseIsPressed) {
		fill('yellow');
	} else {
		return;
	}
	ellipse(mouseX, mouseY, sizeX, sizeY);
}
