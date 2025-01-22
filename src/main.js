"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plateau_1 = require("./plateau");
const rover_1 = require("./rover");
function main(input) {
    console.log(`Processing input: \n${input}`);
    const lines = input.trim().split('\n');
    const [plateauWidth, plateauHeight] = lines[0].split(' ').map(Number);
    console.log(`Initialized plateau with size: ${plateauWidth}x${plateauHeight}`);
    const plateau = new plateau_1.Plateau(plateauWidth, plateauHeight);
    const results = [];
    for (let i = 1; i < lines.length; i += 2) {
        const [x, y, direction] = lines[i].split(' ');
        const commands = lines[i + 1];
        console.log(`Initializing rover at (${x}, ${y}) facing ${direction} with commands: ${commands}`);
        const rover = new rover_1.Rover(Number(x), Number(y), direction, plateau);
        rover.executeCommands(commands);
        const finalPosition = rover.getPosition();
        console.log(`Rover final position: ${finalPosition}`);
        results.push(finalPosition);
    }
    return results;
}
exports.default = main;
