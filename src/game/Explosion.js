export class Explosion {
    constructor(gridX, gridY, radius, maze, onComplete) {
        this.gridX = gridX;
        this.gridY = gridY;
        this.radius = radius;
        this.maze = maze;
        this.onComplete = onComplete;
        
        this.duration = 500; // half a second
        this.timer = this.duration;
        
        this.cells = [];
        this.calculateCells();
    }

    calculateCells() {
        this.cells.push({ x: this.gridX, y: this.gridY });
        
        const dirs = [
            { dx: 0, dy: -1 }, // up
            { dx: 0, dy: 1 },  // down
            { dx: -1, dy: 0 }, // left
            { dx: 1, dy: 0 }   // right
        ];
        
        for (const dir of dirs) {
            for (let i = 1; i <= this.radius; i++) {
                const nx = this.gridX + dir.dx * i;
                const ny = this.gridY + dir.dy * i;
                
                // Out of bounds check
                if (nx < 0 || nx >= this.maze.cols || ny < 0 || ny >= this.maze.rows) break;
                
                const cellType = this.maze.grid[ny][nx];
                
                // 1 = permanent wall (stop explosion)
                if (cellType === 1) {
                    break;
                }
                
                this.cells.push({ x: nx, y: ny });
                
                // 2 = breakable box (destroy box and stop explosion)
                if (cellType === 2) {
                    break;
                }
            }
        }
    }

    update(deltaTime) {
        this.timer -= deltaTime;
        if (this.timer <= 0) {
            this.onComplete(this);
        }
    }

    draw(ctx) {
        // Fade out based on timer
        const alpha = Math.max(0, this.timer / this.duration);
        ctx.fillStyle = `rgba(255, 100, 0, ${alpha})`;
        ctx.shadowColor = '#ff0000';
        ctx.shadowBlur = 10;
        
        for (const cell of this.cells) {
            const px = this.maze.offsetX + cell.x * this.maze.tileSize;
            const py = this.maze.offsetY + cell.y * this.maze.tileSize;
            
            ctx.fillRect(px, py, this.maze.tileSize, this.maze.tileSize);
        }
        
        ctx.shadowBlur = 0; // reset
    }
}
