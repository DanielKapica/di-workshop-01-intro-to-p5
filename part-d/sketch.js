function setup() {
  shape = ellipse
  shapeSize = 30
  createCanvas(400, 400)
  background(0, 0, 0)
}

function draw() {
  if (keyIsPressed) {
    if (key == 'r') {
      fill(255, 0, 0)
      stroke(255, 0, 0)
    }
    if (key == 'g') {
      fill(0, 255, 0)
      stroke(0, 255, 0)
    }
    if (key == 'b') {
      fill(0, 0, 255)
      stroke(0, 0, 255)
    }
    if (key == 's') {
      shape = rect
    }
    if (key == 'c') {
      shape = ellipse
    }
    if (key == '+') {
      shapeSize += 3
    }
    if (key == '-') {
      shapeSize -= 3
    }
  }
  shape(mouseX, mouseY, shapeSize, shapeSize)
}
