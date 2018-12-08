const borderWidth = 10;

export class ScreenDisplay {
    constructor(canvas) {
        this._canvas = canvas;
        this._context = this._canvas.getContext('2d');
    }

    draw(piece, blockManager) {
        this._clearCanvas();
        this._drawBackground();
        this._drawFrame();

        piece.blocks.forEach(block => block.draw(this._context));
        blockManager.grid.forEach(row => {
            row
              .filter(block => block !== null)
              .forEach(block => block.draw(this._context));
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
}