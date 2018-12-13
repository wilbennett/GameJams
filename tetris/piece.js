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
        this.blocks = [];
        this._createBlocks();
        this.doneMoving = false;
    }

    get realLocationBlocks() {
        return this.blocks.map(block => ({ 
            color: block.color, 
            x: this.x + block.x, 
            y: this.y + block.y 
        }));
    }

    rotate() {
        if (this.doneMoving) {
            return;
        }
        this._rotationIndex = (this._rotationIndex + 1) % this._pieceType.blockLocations.length;
        const newLocations = this._pieceType.blockLocations[this._rotationIndex];
        
        if (this._canRotate(newLocations)) {
            for (let index = 0; index < this.blocks.length; index++) {
                const block = this.blocks[index];
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
            this._blockManager.addBlocks(this.realLocationBlocks);
            this.doneMoving = true;
        }
        else {
            this.y += 1;
        }
    }

    _createBlocks() {
        for (let index = 0; index < 4; index++) {
            this.blocks.push(new Block(this._pieceType.color, 0, 0));
        }
        this.rotate();
    }

    _canRotate(newLocations) {
        return newLocations.every(loc => !this._blockManager.hasAtLocation(this.x + loc.xRel, this.y + loc.yRel));
    }

    _canMoveLeft() {
        return this.realLocationBlocks.every(block => block.x > leftCol) 
            && this.realLocationBlocks.every(block => !this._blockManager.hasAtLocation(block.x - 1, block.y));
    }   

    _canMoveRight() {
        return this.realLocationBlocks.every(block => block.x < rightCol)
            && this.realLocationBlocks.every(block => !this._blockManager.hasAtLocation(block.x + 1, block.y));
    }   

    _hitBottom() {
        let result = this.realLocationBlocks.some(block => block.y === bottomRow);
        return result;
    }

    _hitBlock() {
        return this.realLocationBlocks.some(block => this._blockManager.hasAtLocation(block.x, block.y + 1));
    }
}