"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rover_1 = require("../src/rover");
const plateau_1 = require("../src/plateau");
describe('Rover', () => {
    let plateau;
    beforeEach(() => {
        plateau = new plateau_1.Plateau(5, 5);
    });
    test('should return correct position after moving north', () => {
        const rover = new rover_1.Rover(1, 2, 'N', plateau);
        rover.executeCommands('M');
        expect(rover.getPosition()).toBe('1 3 N');
    });
    test('should turn left correctly', () => {
        const rover = new rover_1.Rover(1, 2, 'N', plateau);
        rover.executeCommands('L');
        expect(rover.getPosition()).toBe('1 2 W');
    });
    test('should turn right correctly', () => {
        const rover = new rover_1.Rover(1, 2, 'N', plateau);
        rover.executeCommands('R');
        expect(rover.getPosition()).toBe('1 2 E');
    });
    test('should return correct position after a combination of moves and rotations', () => {
        const rover = new rover_1.Rover(1, 2, 'N', plateau);
        rover.executeCommands('LMLMLMLMM');
        expect(rover.getPosition()).toBe('1 3 N');
    });
    test('should return correct position after moving east', () => {
        const rover = new rover_1.Rover(3, 3, 'E', plateau);
        rover.executeCommands('M');
        expect(rover.getPosition()).toBe('4 3 E');
    });
    test('should not move outside plateau (boundary test)', () => {
        const rover = new rover_1.Rover(0, 0, 'S', plateau);
        rover.executeCommands('M');
        expect(rover.getPosition()).toBe('0 0 S');
    });
});
