const blockSize = 40;

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

    draw(ctx) {
        ctx.fillStyle = this.color;
        const x = this.x * blockSize + 1 + 10;
        const y = this.y * blockSize + 1;
        const size = blockSize - 2;
        ctx.fillRect(x, y, size, size);
    }
}