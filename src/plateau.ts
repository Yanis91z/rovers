export class Plateau {
    constructor(public width: number, public height: number) { }

    isWithinBounds(x: number, y: number): boolean {
        return x >= 0 && x <= this.width && y >= 0 && y <= this.height;
    }
}
