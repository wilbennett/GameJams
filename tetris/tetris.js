import { Piece } from './piece.js';
import { BlockManager } from './blockManager.js';
import { ScreenDisplay } from './screenDisplay.js';

const times = [];
let fps;

export class Tetris {
    constructor() {
        this._keyDownHandler = this._onKeyDown.bind(this);
        this._updateHandler = this._update.bind(this);
    }

    start() {
        this._updateCounter = 0;

        const canvas = document.getElementById('gridCanvas');
        const bgCanvas = document.getElementById('bgCanvas');
        this.fpsDisplay = document.getElementById('fps');

        this._screenDisplay = new ScreenDisplay(canvas, bgCanvas);
        this._screenDisplay.drawBackground();
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
        const now = performance.now();
        while (times.length > 0 && times[0] <= now - 1000) { times.shift(); }
        times.push(now);
        fps = times.length;
        this.fpsDisplay.innerText = `FPS ${fps}`;

        this._updateCounter++;
        if (this.piece.doneMoving) {
            this.piece = new Piece(this.blockManager);
        }
        if (this._updateCounter >= 30) {
            this._updateCounter = 0;
            this.piece.moveDown();
        }

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