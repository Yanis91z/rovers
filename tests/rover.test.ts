import { Rover } from '../src/rover';
import { Plateau } from '../src/plateau';

describe('Rover', () => {
    let plateau: Plateau;

    beforeEach(() => {
        plateau = new Plateau(5, 5);
    });

    test('should return correct position after moving north', () => {
        const rover = new Rover(1, 2, 'N', plateau);
        rover.executeCommands('M');
        expect(rover.getPosition()).toBe('1 3 N');
    });

    test('should turn left correctly', () => {
        const rover = new Rover(1, 2, 'N', plateau);
        rover.executeCommands('L');
        expect(rover.getPosition()).toBe('1 2 W');
    });

    test('should turn right correctly', () => {
        const rover = new Rover(1, 2, 'N', plateau);
        rover.executeCommands('R');
        expect(rover.getPosition()).toBe('1 2 E');
    });

    test('should return correct position after a combination of moves and rotations', () => {
        const rover = new Rover(1, 2, 'N', plateau);
        rover.executeCommands('LMLMLMLMM');
        expect(rover.getPosition()).toBe('1 3 N');
    });

    test('should return correct position after moving east', () => {
        const rover = new Rover(3, 3, 'E', plateau);
        rover.executeCommands('M');
        expect(rover.getPosition()).toBe('4 3 E');
    });

    test('should not move outside plateau (boundary test)', () => {
        const rover = new Rover(0, 0, 'S', plateau);
        rover.executeCommands('M');
        expect(rover.getPosition()).toBe('0 0 S');
    });
});
