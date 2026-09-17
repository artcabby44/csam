export class Maze {
    constructor(cols, rows, tileSize, offsetX, offsetY) {
        this.cols = cols;
        this.rows = rows;
        this.tileSize = tileSize;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        
        // 0 = empty, 1 = permanent wall, 2 = breakable box
        this.grid = [];
        this.generate();
    }

    generate() {
        this.grid = [];
        for (let y = 0; y < this.rows; y++) {
            let row = [];
            for (let x = 0; x < this.cols; x++) {
                // Outer walls and permanent checkerboard walls
                if (x === 0 || x === this.cols - 1 || y === 0 || y === this.rows - 1) {
                    row.push(1);
                } else if (x % 2 === 0 && y % 2 === 0) {
                    row.push(1);
                } else {
                    // Breakable boxes, empty, or player start
                    // Leave top-left corner open for player (1,1), (1,2), (2,1)
                    if ((x === 1 && y === 1) || (x === 1 && y === 2) || (x === 2 && y === 1)) {
                        row.push(0);
                    } else {
                        // 50% chance of breakable box
                        row.push(Math.random() < 0.5 ? 2 : 0);
                    }
                }
            }
            this.grid.push(row);
        }
    }

    draw(ctx) {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                const cell = this.grid[y][x];
                const px = this.offsetX + x * this.tileSize;
                const py = this.offsetY + y * this.tileSize;
                
                if (cell === 1) {
                    // Permanent Wall (Server rack look)
                    ctx.fillStyle = '#333';
                    ctx.fillRect(px, py, this.tileSize, this.tileSize);
                    ctx.strokeStyle = '#00ffcc';
                    ctx.strokeRect(px, py, this.tileSize, this.tileSize);
                } else if (cell === 2) {
                    // Breakable Box (Encrypted block)
                    ctx.fillStyle = '#664400';
                    ctx.fillRect(px, py, this.tileSize, this.tileSize);
                    ctx.strokeStyle = '#ffaa00';
                    ctx.strokeRect(px, py, this.tileSize, this.tileSize);
                    
                    // Box design
                    ctx.beginPath();
                    ctx.moveTo(px, py);
                    ctx.lineTo(px + this.tileSize, py + this.tileSize);
                    ctx.moveTo(px + this.tileSize, py);
                    ctx.lineTo(px, py + this.tileSize);
                    ctx.stroke();
                } else {
                    // Empty floor
                    ctx.fillStyle = '#111';
                    ctx.fillRect(px, py, this.tileSize, this.tileSize);
                }
            }
        }
    }

    isSolid(x, y) {
        if (x < 0 || x >= this.cols || y < 0 || y >= this.rows) return true;
        return this.grid[y][x] === 1 || this.grid[y][x] === 2;
    }
}
