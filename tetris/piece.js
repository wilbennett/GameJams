import { Block } from './block.js'
import { BlockTypes } from './gameData.js'

const topRow = 0;
const bottomRow = 19;
const rightCol = 9;
const leftCol = 0;

export class Piece {
    constructor(blockManager) {
        this._blockManager = blockManager;
        const blockType = BlockTypes[Math.floor(Math.random() * BlockTypes.length)];
        this.blocks = this._createBlocksForType(blockType, Math.floor(rightCol / 2), topRow);
        this.doneMoving = false;
    }

    rotate() {
        if (this.doneMoving) {
            return;
        }
        console.log('yeah, it totally rotated...');
    }

    moveLeft() {
        if (this.doneMoving) {
            return;
        }
        if (this._canMoveLeft()) {
            this.blocks.forEach(block => block.move(-1, 0));
        }
    }

    moveRight() {
        if (this.doneMoving) {
            return;
        }
        if (this._canMoveRight()) {
            this.blocks.forEach(block => block.move(1, 0));
        }
    }

    moveDown() {
        if (this.doneMoving) {
            return;
        }
        if (this._hitBottom() || this._hitBlock()) {
            this._blockManager.addBlocks(this.blocks);
            this.doneMoving = true;
        }
        else {
            this.blocks.forEach(block => block.move(0, 1));
        }
    }

    _createBlocksForType(blockType, x, y) {
        let blocks = [];
        blockType.blockLocations.forEach(loc => blocks.push(new Block(blockType.color, x + loc.xRel, y + loc.yRel)));
        return blocks;
    }

    _canMoveLeft() {
        return this.blocks.every(block => block.x > leftCol) 
            && this.blocks.every(block => !this._blockManager.hasAtLocation(block.x - 1, block.y));
    }   

    _canMoveRight() {
        return this.blocks.every(block => block.x < rightCol)
            && this.blocks.every(block => !this._blockManager.hasAtLocation(block.x + 1, block.y));
    }   

    _hitBottom() {
        let result = this.blocks.some(block => block.y === bottomRow);
        return result;
    }

    _hitBlock() {
        return this.blocks.some(block => this._blockManager.hasAtLocation(block.x, block.y + 1));
    }
}