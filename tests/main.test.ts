import main from '../src/main';

describe('Main Program', () => {
    it('should handle multiple rovers correctly', () => {
        const input = `5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM`;
        const output = main(input);
        expect(output).toEqual(['1 3 N', '5 1 E']);
    });
});
