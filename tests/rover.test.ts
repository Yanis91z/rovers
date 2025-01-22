import { Plateau } from '../src/plateau';
import { Rover } from '../src/rover';

describe('Rover', () => {
    it('should return correct position after executing commands', () => {
        const plateau = new Plateau(5, 5);
        const rover = new Rover(1, 2, 'N', plateau);
        rover.executeCommands('LMLMLMLMM');
        expect(rover.getPosition()).toBe('1 3 N');
    });
});
