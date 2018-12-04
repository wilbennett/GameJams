export class BlockManager {
    constructor() {
        this.blocks = [];
    }

    addBlocks(blocks) {
        this.blocks = this.blocks.concat(blocks);
    }

    draw(ctx) {
        this.blocks.forEach(block => block.draw(ctx));
    }

    hasAtLocation(x, y) {
        return this.blocks.some(block => block.x === x && block.y === y);
    }
}