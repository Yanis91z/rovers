export function rotateLeft(direction: string): string {
    console.log(`Rotating left from direction ${direction}`);
    const directions = ['N', 'W', 'S', 'E'];
    const index = directions.indexOf(direction);
    if (index === -1) throw new Error(`Invalid direction: ${direction}`);
    const newDirection = directions[(index + 1) % 4];
    console.log(`New direction after left rotation: ${newDirection}`);
    return newDirection;
}



export function rotateRight(direction: string): string {
    console.log(`Rotating right from direction ${direction}`);
    const directions = ['N', 'E', 'S', 'W'];
    const index = directions.indexOf(direction);
    if (index === -1) throw new Error(`Invalid direction: ${direction}`);
    const newDirection = directions[(index + 1) % 4];
    console.log(`New direction after right rotation: ${newDirection}`);
    return newDirection;
}



export function moveForward(x: number, y: number, direction: string): [number, number] {
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




