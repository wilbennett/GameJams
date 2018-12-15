export class Block {
    constructor(color, startingX, startingY, container) {
        this.color = color;
        this._xRel = startingX;
        this._yRel = startingY;
        this._container = container;
    }

    get container() {
        return this._container;
    }

    set container(value) {
        // Adjust numbers to new container, since we use relative values.
        const prevX = this.x;
        const prevY = this.y;
        this._container = value;
        this.x = prevX;
        this.y = prevY;
    }

    get x() {
        return this._xRel + this._container.x;
    }

    set x(value) {
        this._xRel = value - this._container.x;
    }

    set xRel(value) {
        this._xRel = value;
    }

    get y() {
        return this._yRel + this._container.y;
    }

    set y(value) {
        this._yRel = value - this._container.y;
    }

    set yRel(value) {
        this._yRel = value;
    }

}