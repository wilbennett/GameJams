export class BlockManager {
    constructor() {
        this.grid = [];
        this._addEmptyRows(20);
    }

    addBlocks(blocks) {
        blocks.forEach(block => this.grid[block.y][block.x] = block);
        this.clearCompleteRows(blocks.map(block => block.y));
    }

    hasAtLocation(x, y) {
        return this.grid[y][x] !== null;
    }

    clearCompleteRows(rowsToCheck) {
        this.grid = this.grid.filter(row => row.some(block => block === null));
        let countRemoved = 20 - this.grid.length;
        if (countRemoved > 0) {
            this._addEmptyRows(countRemoved);
            this._setNewBlockLocations();
        }
        return countRemoved;
    }

    _setNewBlockLocations() {
        this.grid.forEach((row, y) => {
            row.forEach(block => {
                if (block !== null) {
                    block.y = y;
                }
            });
        });
    }

    _addEmptyRows(count) {
        let rowsToAdd = new Array(count).fill(null).map(() => new Array(10).fill(null));
        this.grid = rowsToAdd.concat(this.grid);
    }
}