type Point = {
x: number;
y: number;
};
// Exactly the same as the earlier example
function printpointer(pt: Point) {
console.log(" x  " + pt.x);
console.log(" y  " + pt.y);
}
printpointer({ x: 100, y: 100 });