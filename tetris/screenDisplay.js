const borderWidth = 10;
const gridSize = 40;
const paddingSize = 1;
const blockSize = gridSize - (paddingSize * 2);

export class ScreenDisplay {
    constructor(canvas, bgCanvas) {
        this._canvas = canvas;
        this._bgCanvas = bgCanvas;
        this._context = this._canvas.getContext('2d');
        this._bgContext = this._bgCanvas.getContext('2d');
    }

    draw(piece, blockManager) {
        this._clearCanvas();
        piece.blocks.forEach(block => this._drawBlock(block));
        blockManager.grid.forEach(row => {
            row
              .filter(block => block !== null)
              .forEach(block => this._drawBlock(block));
        });
    }

    _clearCanvas() {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    drawBackground() {
        this._bgContext.fillStyle = '#333333';
        this._bgContext.fillRect(0, 0, this._bgCanvas.width, this._bgCanvas.height);
        this._bgContext.strokeStyle = '#CCCCCC';
        this._bgContext.lineWidth = borderWidth;
        this._bgContext.rect(borderWidth / 2, borderWidth / -2, this._bgCanvas.width - borderWidth, this._bgCanvas.height);
        this._bgContext.stroke();
    }

    _drawBlock(block) {
        this._context.fillStyle = block.color;
        const x = block.x * gridSize + paddingSize;
        const y = block.y * gridSize + paddingSize;
        this._context.fillRect(x, y, blockSize, blockSize);
    }
}