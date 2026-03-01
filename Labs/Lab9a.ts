type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction): void {
  console.log("Moving " + direction);
}
move("up"); 