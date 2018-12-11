export class Block {
    constructor(color, startingX, startingY) {
        this.color = color;
        this.x = startingX;
        this.y = startingY;
    }

    move(xChange, yChange) {
        this.x += xChange;
        this.y += yChange;
    }
}