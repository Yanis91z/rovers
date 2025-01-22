"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateLeft = rotateLeft;
exports.rotateRight = rotateRight;
exports.moveForward = moveForward;
function rotateLeft(direction) {
    console.log(`Rotating left from direction ${direction}`);
    const directions = ['N', 'W', 'S', 'E'];
    const index = directions.indexOf(direction);
    if (index === -1)
        throw new Error(`Invalid direction: ${direction}`);
    const newDirection = directions[(index + 1) % 4];
    console.log(`New direction after left rotation: ${newDirection}`);
    return newDirection;
}
function rotateRight(direction) {
    console.log(`Rotating right from direction ${direction}`);
    const directions = ['N', 'E', 'S', 'W'];
    const index = directions.indexOf(direction);
    if (index === -1)
        throw new Error(`Invalid direction: ${direction}`);
    const newDirection = directions[(index + 1) % 4];
    console.log(`New direction after right rotation: ${newDirection}`);
    return newDirection;
}
function moveForward(x, y, direction) {
    console.log(`Moving forward from (${x}, ${y}) facing ${direction}`);
    switch (direction) {
        case 'N':
            return [x, y + 1];
        case 'E':
            return [x + 1, y];
        case 'S':
            return [x, y - 1];
        case 'W':
            return [x - 1, y];
        default:
            throw new Error(`Invalid direction: ${direction}`);
    }
}
