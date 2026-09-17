export class Enemy {
    constructor(gridX, gridY, maze) {
        this.maze = maze;
        this.gridX = gridX;
        this.gridY = gridY;
        
        this.x = this.maze.offsetX + this.gridX * this.maze.tileSize;
        this.y = this.maze.offsetY + this.gridY * this.maze.tileSize;
        
        this.speed = 2; // slower than player
        
        this.targetX = this.x;
        this.targetY = this.y;
        
        this.isMoving = false;
        
        this.type = "Malware Bot";
    }

    update(deltaTime) {
        if (this.isMoving) {
            const dx = this.targetX - this.x;
            const dy = this.targetY - this.y;
            
            if (Math.abs(dx) <= this.speed && Math.abs(dy) <= this.speed) {
                this.x = this.targetX;
                this.y = this.targetY;
                this.isMoving = false;
                this.gridX = Math.round((this.x - this.maze.offsetX) / this.maze.tileSize);
                this.gridY = Math.round((this.y - this.maze.offsetY) / this.maze.tileSize);
            } else {
                this.x += Math.sign(dx) * this.speed;
                this.y += Math.sign(dy) * this.speed;
            }
        } else {
            this.pickDirection();
        }
    }

    pickDirection() {
        const dirs = [
            { dx: 0, dy: -1 }, // up
            { dx: 0, dy: 1 },  // down
            { dx: -1, dy: 0 }, // left
            { dx: 1, dy: 0 }   // right
        ];
        
        // Randomly shuffle directions
        dirs.sort(() => Math.random() - 0.5);
        
        for (const dir of dirs) {
            const nextX = this.gridX + dir.dx;
            const nextY = this.gridY + dir.dy;
            
            if (!this.maze.isSolid(nextX, nextY)) {
                this.targetX = this.maze.offsetX + nextX * this.maze.tileSize;
                this.targetY = this.maze.offsetY + nextY * this.maze.tileSize;
                this.isMoving = true;
                break;
            }
        }
    }

    draw(ctx) {
        ctx.fillStyle = '#ff00ff'; // Magenta color for enemies
        const padding = 8;
        const drawX = this.x + padding;
        const drawY = this.y + padding;
        const size = this.maze.tileSize - padding * 2;
        
        ctx.fillRect(drawX, drawY, size, size);
        
        // Enemy "eyes"
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(drawX + 2, drawY + 4, 4, 4);
        ctx.fillRect(drawX + size - 6, drawY + 4, 4, 4);
    }
}
