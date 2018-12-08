const borderWidth = 10;
const blockSize = 40;

export class ScreenDisplay {
    constructor(canvas) {
        this._canvas = canvas;
        this._context = this._canvas.getContext('2d');
    }

    draw(piece, blockManager) {
        this._clearCanvas();
        this._drawBackground();
        this._drawFrame();

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

    _drawFrame() {
        const ctx = this._context;
        ctx.strokeStyle = '#CCCCCC';
        ctx.lineWidth = borderWidth;
        ctx.rect(borderWidth / 2, borderWidth / -2, this._canvas.width - borderWidth, this._canvas.height);
        ctx.stroke();
    }

    _drawBackground() {
        this._context.fillStyle = '#333333';
        this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
    }

    _drawBlock(block) {
        const ctx = this._context;
        ctx.fillStyle = block.color;
        const x = block.x * blockSize + 1 + 10;
        const y = block.y * blockSize + 1;
        const size = blockSize - 2;
        ctx.fillRect(x, y, size, size);
    }
}