"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plateau_1 = require("../src/plateau");
const rover_1 = require("../src/rover");
describe('Rover', () => {
    it('should return correct position after executing commands', () => {
        const plateau = new plateau_1.Plateau(5, 5);
        const rover = new rover_1.Rover(1, 2, 'N', plateau);
        rover.executeCommands('LMLMLMLMM');
        expect(rover.getPosition()).toBe('1 3 N');
    });
});
