function setup() {
  createCanvas(400, 400)
  background(0, 0, 0)
}

function draw() {
  if (keyIsPressed) {
    fill(mouseX, 0, mouseY)
  } else {
    fill(0, 30, 255)
    stroke(0, 255, 0)
  }

  rect(mouseX, mouseY, 30, 30)
}
