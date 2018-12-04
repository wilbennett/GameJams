export class BlockManager {
    constructor() {
        this.grid = new Array(20).fill(null).map(() => new Array(10).fill(null));
    }

    addBlocks(blocks) {
        blocks.forEach(block => this.grid[block.y][block.x] = block);
    }

    draw(ctx) {
        this.grid.forEach(row => {
            row
              .filter(b => b !== null)
              .forEach(block => block.draw(ctx));
        });
    }

    hasAtLocation(x, y) {
        return this.grid[y][x] !== null;
    }

    clearCompleteRows() {
        return 0;
    }
}