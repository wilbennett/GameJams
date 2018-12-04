import { Piece } from './piece.js';
import { BlockManager } from './blockManager.js';

const borderWidth = 10;

export class Tetris {
    constructor() {
        // TODO: Set up the initial stuff.
        console.log('In Tetris Constructor...');
        this._keyDownHandler = this._onKeyDown.bind(this);
    }

    start() {
        console.log('App Starting...');

        this.canvas = document.getElementById('theCanvas');
        this.context = this.canvas.getContext('2d');
        this.blockManager = new BlockManager();
        this.piece = new Piece(this.blockManager);
        this._animationLoop = window.requestAnimationFrame(() => this._update());

        document.addEventListener('keydown', this._keyDownHandler);
    }

    stop() {
        window.cancelAnimationFrame(this._animationLoop);
        document.removeEventListener('keydown', this._keyDownHandler);
    }

    _update() {
        if (this.piece.doneMoving) {
            this.piece = new Piece(this.blockManager);
        }

        const rowsCleared = this.blockManager.clearCompleteRows();

        this._clearCanvas();
        this._drawBackground();
        this._drawFrame();

        this.piece.draw(this.context);
        this.blockManager.draw(this.context);

        this._animationLoop = window.requestAnimationFrame(() => this._update());
    }

    _clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    _drawFrame() {
        const ctx = this.context;
        ctx.strokeStyle = '#CCCCCC';
        ctx.lineWidth = borderWidth;
        ctx.rect(borderWidth / 2, borderWidth / -2, this.canvas.width - borderWidth, this.canvas.height);
        ctx.stroke();
    }

    _drawBackground() {
        this.context.fillStyle = '#333333';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    _onKeyDown(event) {
        switch (event.keyCode) {
            case 87: // w
            case 38: // up
                this.piece.rotate();
                break;
            case 65: // a
            case 37: // left
                this.piece.moveLeft();
                break;
            case 83: // s
            case 40: // down
                this.piece.moveDown();
                break;
            case 68: // d
            case 39: // right
                this.piece.moveRight();
                break;
            default:
                break;
        }
    }
}

let app = new Tetris()
app.start();