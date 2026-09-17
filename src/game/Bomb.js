export class Bomb {
    constructor(gridX, gridY, radius, maze, onExplode) {
        this.gridX = gridX;
        this.gridY = gridY;
        this.radius = radius;
        this.maze = maze;
        this.onExplode = onExplode;
        
        this.timer = 2500; // 2.5 seconds
        this.isExploding = false;
    }

    update(deltaTime) {
        this.timer -= deltaTime;
        if (this.timer <= 0 && !this.isExploding) {
            this.explode();
        }
    }

    explode() {
        this.isExploding = true;
        this.onExplode(this);
    }

    draw(ctx) {
        const px = this.maze.offsetX + this.gridX * this.maze.tileSize;
        const py = this.maze.offsetY + this.gridY * this.maze.tileSize;
        const center = this.maze.tileSize / 2;
        
        ctx.fillStyle = '#ff0044';
        
        // Bomb pulsing effect based on timer
        const pulse = Math.abs(Math.sin(this.timer / 150));
        const currentRadius = (center - 4) + pulse * 2;
        
        ctx.beginPath();
        ctx.arc(px + center, py + center, currentRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Bomb fuse
        ctx.strokeStyle = '#ffff00';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(px + center, py + center - currentRadius);
        ctx.lineTo(px + center + 5, py + center - currentRadius - 5);
        ctx.stroke();
        ctx.lineWidth = 1; // reset
    }
}
