import { Piece } from './piece.js';
import { BlockManager } from './blockManager.js';
import { ScreenDisplay } from './screenDisplay.js';

export class Tetris {
    constructor() {
        // TODO: Set up the initial stuff.
        console.log('In Tetris Constructor...');
        this._keyDownHandler = this._onKeyDown.bind(this);
        this._updateHandler = this._update.bind(this);
    }

    start() {
        console.log('App Starting...');

        this.canvas = document.getElementById('theCanvas');

        this._screenDisplay = new ScreenDisplay(this.canvas);
        this.blockManager = new BlockManager();
        this.piece = new Piece(this.blockManager);
        this._animationLoop = window.requestAnimationFrame(this._updateHandler);

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

        this._screenDisplay.draw(this.piece, this.blockManager);

        this._animationLoop = window.requestAnimationFrame(this._updateHandler);
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