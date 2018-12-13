import { Block } from './block.js'
import { PieceTypeData } from './gameData.js'

const topRow = 0;
const bottomRow = 19;
const rightCol = 9;
const leftCol = 0;

export class Piece {
    constructor(blockManager) {
        this.x = 3;
        this.y = 0;
        this._blockManager = blockManager;
        this._pieceType = PieceTypeData[Math.floor(Math.random() * PieceTypeData.length)];
        this._rotationIndex = -1;
        this.localBlocks = [];
        this._createBlocks();
        this.doneMoving = false;
    }

    get blocks() {
        return this.localBlocks.map(block => new Block(block.color, this.x + block.x, this.y + block.y));
    }

    rotate() {
        if (this.doneMoving) {
            return;
        }
        this._rotationIndex = (this._rotationIndex + 1) % this._pieceType.blockLocations.length;
        const newLocations = this._pieceType.blockLocations[this._rotationIndex];
        
        if (this._canRotate(newLocations)) {
            for (let index = 0; index < this.localBlocks.length; index++) {
                const block = this.localBlocks[index];
                const newLoc = newLocations[index];
                block.x = newLoc.xRel;
                block.y = newLoc.yRel;
            }
        }
    }

    moveLeft() {
        if (this.doneMoving) {
            return;
        }
        if (this._canMoveLeft()) {
            this.x -= 1;
        }
    }

    moveRight() {
        if (this.doneMoving) {
            return;
        }
        if (this._canMoveRight()) {
            this.x += 1;
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
            this.y += 1;
        }
    }

    _createBlocks() {
        for (let index = 0; index < 4; index++) {
            this.localBlocks.push(new Block(this._pieceType.color, 0, 0));
        }
        this.rotate();
    }

    _canRotate(newLocations) {
        return newLocations.every(loc => !this._blockManager.hasAtLocation(this.x + loc.xRel, this.y + loc.yRel));
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