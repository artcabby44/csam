export class Player {
    constructor(maze) {
        this.maze = maze;
        // Logical grid position
        this.gridX = 1;
        this.gridY = 1;
        
        // Pixel coordinates for smooth drawing
        this.x = this.maze.offsetX + this.gridX * this.maze.tileSize;
        this.y = this.maze.offsetY + this.gridY * this.maze.tileSize;
        
        this.speed = 4; // pixels per frame
        
        this.targetX = this.x;
        this.targetY = this.y;
        
        this.isMoving = false;
        this.invulnTimer = 0;
        
        this.keys = {
            ArrowUp: false,
            ArrowDown: false,
            ArrowLeft: false,
            ArrowRight: false,
            w: false,
            a: false,
            s: false,
            d: false,
            ' ': false
        };

        window.addEventListener('keydown', (e) => this.handleKeyDown(e));
        window.addEventListener('keyup', (e) => this.handleKeyUp(e));
    }

    handleKeyDown(e) {
        if (this.keys.hasOwnProperty(e.key)) {
            this.keys[e.key] = true;
        }
        if (this.keys.hasOwnProperty(e.key.toLowerCase())) {
            this.keys[e.key.toLowerCase()] = true;
        }
        
        if (e.key === ' ' && this.engine) {
            this.engine.placeBomb(this.gridX, this.gridY);
        }
    }

    handleKeyUp(e) {
        if (this.keys.hasOwnProperty(e.key)) {
            this.keys[e.key] = false;
        }
        if (this.keys.hasOwnProperty(e.key.toLowerCase())) {
            this.keys[e.key.toLowerCase()] = false;
        }
    }

    update(deltaTime) {
        if (this.invulnTimer > 0) {
            this.invulnTimer -= deltaTime;
        }

        if (this.isMoving) {
            const dx = this.targetX - this.x;
            const dy = this.targetY - this.y;
            
            if (Math.abs(dx) <= this.speed && Math.abs(dy) <= this.speed) {
                this.x = this.targetX;
                this.y = this.targetY;
                this.isMoving = false;
                this.gridX = (this.x - this.maze.offsetX) / this.maze.tileSize;
                this.gridY = (this.y - this.maze.offsetY) / this.maze.tileSize;
            } else {
                this.x += Math.sign(dx) * this.speed;
                this.y += Math.sign(dy) * this.speed;
            }
        } else {
            // Determine next cell
            let nextGridX = this.gridX;
            let nextGridY = this.gridY;
            
            if (this.keys.ArrowUp || this.keys.w) {
                nextGridY--;
            } else if (this.keys.ArrowDown || this.keys.s) {
                nextGridY++;
            } else if (this.keys.ArrowLeft || this.keys.a) {
                nextGridX--;
            } else if (this.keys.ArrowRight || this.keys.d) {
                nextGridX++;
            }
            
            if (nextGridX !== this.gridX || nextGridY !== this.gridY) {
                if (!this.maze.isSolid(nextGridX, nextGridY)) {
                    this.targetX = this.maze.offsetX + nextGridX * this.maze.tileSize;
                    this.targetY = this.maze.offsetY + nextGridY * this.maze.tileSize;
                    this.isMoving = true;
                }
            }
        }
    }

    draw(ctx) {
        if (this.invulnTimer > 0) {
            // Blink every 100ms
            if (Math.floor(this.invulnTimer / 100) % 2 === 0) {
                return; // skip drawing this frame
            }
        }

        // Draw player (Cyber Defender)
        ctx.fillStyle = '#00ffff';
        const padding = 6;
        const drawX = this.x + padding;
        const drawY = this.y + padding;
        const size = this.maze.tileSize - padding * 2;
        
        ctx.fillRect(drawX, drawY, size, size);
        
        // Eye (helmet visor)
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(drawX + 4, drawY + 4, size - 8, 8);
    }
}
