import { Plateau } from './plateau';
import { rotateLeft, rotateRight, moveForward } from './commands';

export class Rover {
    constructor(
        public x: number,
        public y: number,
        public direction: string,
        private plateau: Plateau
    ) { }

    executeCommands(commands: string): void {
        for (const command of commands) {
            console.log(`Executing command: ${command}, Current position: (${this.x}, ${this.y}), Direction: ${this.direction}`);
            if (command === 'L') {
                this.direction = rotateLeft(this.direction);
                console.log(`Turned left. New direction: ${this.direction}`);
            } else if (command === 'R') {
                this.direction = rotateRight(this.direction);
                console.log(`Turned right. New direction: ${this.direction}`);
            } else if (command === 'M') {
                const [newX, newY] = moveForward(this.x, this.y, this.direction);
                console.log(`Attempting to move to (${newX}, ${newY})`);
                if (this.plateau.isWithinBounds(newX, newY)) {
                    this.x = newX;
                    this.y = newY;
                    console.log(`Moved to (${this.x}, ${this.y})`);
                } else {
                    console.log(`Move blocked. (${newX}, ${newY}) is out of bounds.`);
                }
            }
        }
    }



    getPosition(): string {
        return `${this.x} ${this.y} ${this.direction}`;
    }
}
