import { Block } from './block.js'

export class Piece {
    constructor() {
        this.blocks = [
            new Block('#FF0000', 4, 0),
            new Block('#FF0000', 5, 0),
            new Block('#FF0000', 4, 1),
            new Block('#FF0000', 5, 1)
        ];
    }

    rotate() {
        console.log('yeah, it totally rotated...');
    }

    moveLeft() {
        if (this.blocks.every(block => block.x > 0)) {
            this.blocks.forEach(block => block.move(-1, 0));
        }
    }

    moveRight() {
        if (this.blocks.every(block => block.x < 9)) {
            this.blocks.forEach(block => block.move(1, 0));
        }
    }

    moveDown() {
        if (this.blocks.every(block => block.y < 19)) {
            this.blocks.forEach(block => block.move(0, 1));
        }
    }
}