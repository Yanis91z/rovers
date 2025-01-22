"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __importDefault(require("../src/main"));
describe('Main Program', () => {
    it('should handle multiple rovers correctly', () => {
        const input = `5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM`;
        const output = (0, main_1.default)(input);
        expect(output).toEqual(['1 3 N', '5 1 E']);
    });
});
