export class PowerUp {
    constructor(gridX, gridY, type, maze) {
        this.gridX = gridX;
        this.gridY = gridY;
        this.type = type;
        this.maze = maze;
        
        this.x = this.maze.offsetX + this.gridX * this.maze.tileSize;
        this.y = this.maze.offsetY + this.gridY * this.maze.tileSize;
        
        this.bobOffset = 0;
        this.time = Math.random() * 100;
    }

    update(deltaTime) {
        this.time += deltaTime * 0.005;
        this.bobOffset = Math.sin(this.time) * 3;
    }

    draw(ctx) {
        const px = this.x;
        const py = this.y + this.bobOffset;
        const size = this.maze.tileSize;
        
        ctx.fillStyle = '#00ffcc';
        
        if (this.type === 'bomb') {
            // Extra bomb
            ctx.fillStyle = '#ffaa00';
            ctx.beginPath();
            ctx.arc(px + size/2, py + size/2, size/3, 0, Math.PI * 2);
            ctx.fill();
        } else if (this.type === 'flame') {
            // Extra explosion radius
            ctx.fillStyle = '#ff4400';
            ctx.beginPath();
            ctx.moveTo(px + size/2, py + size/4);
            ctx.lineTo(px + size*0.75, py + size*0.75);
            ctx.lineTo(px + size*0.25, py + size*0.75);
            ctx.fill();
        } else if (this.type === 'speed') {
            // Speed up
            ctx.fillStyle = '#00ffff';
            ctx.fillRect(px + size/3, py + size/3, size/3, size/3);
        }
        
        ctx.strokeStyle = '#fff';
        ctx.strokeRect(px + 4, py + 4, size - 8, size - 8);
    }
}
