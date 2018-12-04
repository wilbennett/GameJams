import { Block } from './block.js'

export class Piece {
    constructor(blockManager) {
        this._blockManager = blockManager;
        this.blocks = [
            new Block('#FF0000', 4, 0),
            new Block('#FF0000', 5, 0),
            new Block('#FF0000', 4, 1),
            new Block('#FF0000', 5, 1)
        ];
        this.doneMoving = false;
    }

    rotate() {
        console.log('yeah, it totally rotated...');
    }

    moveLeft() {
        if (this._canMoveLeft()) {
            this.blocks.forEach(block => block.move(-1, 0));
        }
    }

    moveRight() {
        if (this._canMoveRight()) {
            this.blocks.forEach(block => block.move(1, 0));
        }
    }

    moveDown() {
        if (this._hitBottom() || this._hitBlock()) {
            this._blockManager.addBlocks(this.blocks);
            this.doneMoving = true;
        }
        else {
            this.blocks.forEach(block => block.move(0, 1));
        }
    }

    draw(ctx) {
        this.blocks.forEach(block => block.draw(ctx));
    }

    _canMoveLeft() {
        return this.blocks.every(block => block.x > 0) 
            && this.blocks.every(block => !this._blockManager.hasAtLocation(block.x - 1, block.y));
    }   

    _canMoveRight() {
        return this.blocks.every(block => block.x < 9)
            && this.blocks.every(block => !this._blockManager.hasAtLocation(block.x + 1, block.y));
    }   

    _hitBottom() {
        return this.blocks.some(block => block.y === 19);
    }

    _hitBlock() {
        return this.blocks.some(block => this._blockManager.hasAtLocation(block.x, block.y + 1));
    }
}