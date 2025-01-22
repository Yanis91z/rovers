import { Plateau } from './plateau';
import { Rover } from './rover';

function main(input: string): string[] {
    console.log(`Processing input: \n${input}`);
    const lines = input.trim().split('\n');
    const [plateauWidth, plateauHeight] = lines[0].split(' ').map(Number);
    console.log(`Initialized plateau with size: ${plateauWidth}x${plateauHeight}`);
    const plateau = new Plateau(plateauWidth, plateauHeight);

    const results: string[] = [];
    for (let i = 1; i < lines.length; i += 2) {
        const [x, y, direction] = lines[i].split(' ');
        const commands = lines[i + 1];
        console.log(`Initializing rover at (${x}, ${y}) facing ${direction} with commands: ${commands}`);
        const rover = new Rover(Number(x), Number(y), direction, plateau);
        rover.executeCommands(commands);
        const finalPosition = rover.getPosition();
        console.log(`Rover final position: ${finalPosition}`);
        results.push(finalPosition);
    }

    return results;
}

export default main;
