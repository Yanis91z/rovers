"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rover = void 0;
const commands_1 = require("./commands");
class Rover {
    constructor(x, y, direction, plateau) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.plateau = plateau;
    }
    executeCommands(commands) {
        for (const command of commands) {
            console.log(`Executing command: ${command}, Current position: (${this.x}, ${this.y}), Direction: ${this.direction}`);
            if (command === 'L') {
                this.direction = (0, commands_1.rotateLeft)(this.direction);
                console.log(`Turned left. New direction: ${this.direction}`);
            }
            else if (command === 'R') {
                this.direction = (0, commands_1.rotateRight)(this.direction);
                console.log(`Turned right. New direction: ${this.direction}`);
            }
            else if (command === 'M') {
                const [newX, newY] = (0, commands_1.moveForward)(this.x, this.y, this.direction);
                console.log(`Attempting to move to (${newX}, ${newY})`);
                if (this.plateau.isWithinBounds(newX, newY)) {
                    this.x = newX;
                    this.y = newY;
                    console.log(`Moved to (${this.x}, ${this.y})`);
                }
                else {
                    console.log(`Move blocked. (${newX}, ${newY}) is out of bounds.`);
                }
            }
        }
    }
    getPosition() {
        return `${this.x} ${this.y} ${this.direction}`;
    }
}
exports.Rover = Rover;
