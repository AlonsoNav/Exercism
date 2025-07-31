// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width
  this.height = height
}

Size.prototype.resize = function(width, height) {
  this.width = width
  this.height = height
}

export function Position(x = 0, y = 0) {
  this.x = x
  this.y = y
}

Position.prototype.move = function(x, y) {
  this.x = x
  this.y = y
}

export class ProgramWindow{
  constructor() {
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
  }

  resize(newSize) {
    newSize.resize(Math.max(1, Math.min (newSize.width, this.screenSize.width - this.position.x)), Math.max(1, Math.min(newSize.height, this.screenSize.height - this.position.y))) 
    this.size = newSize
  }

  move(newPosition) {
    newPosition.move(Math.max(0, Math.min (newPosition.x, this.screenSize.width - this.size.width)), Math.max(0, Math.min(newPosition.y, this.screenSize.height - this.size.height)))
    this.position = newPosition
  }
}

export function changeWindow(programWindow) {
  programWindow.size = new Size(400, 300)
  programWindow.position = new Position(100, 150)
  return programWindow
}
