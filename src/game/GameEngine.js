import { Maze } from './Maze.js';
import { Player } from './Player.js';
import { Bomb } from './Bomb.js';
import { Explosion } from './Explosion.js';
import { Enemy } from './Enemy.js';
import { PowerUp } from './PowerUp.js';
import { GameState } from '../systems/GameState.js';
import { QuestionManager } from '../challenges/QuestionManager.js';

export class GameEngine {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        
        this.lastTime = 0;
        this.animationId = null;
        
        this.maze = null;
        this.player = null;
        
        this.bombs = [];
        this.explosions = [];
        this.enemies = [];
        this.powerups = [];
        
        this.questionManager = new QuestionManager(this);
    }

    start() {
        const tileSize = 36;
        const cols = 15;
        const rows = 15;
        const offsetX = (this.canvas.width - cols * tileSize) / 2;
        const offsetY = (this.canvas.height - rows * tileSize) / 2 + 15;
        
        this.maze = new Maze(cols, rows, tileSize, offsetX, offsetY);
        this.player = new Player(this.maze);
        this.player.engine = this;
        
        this.spawnEnemies(3);
        
        this.updateHUD();
        
        this.lastTime = performance.now();
        this.loop(this.lastTime);
    }

    spawnEnemies(count) {
        let spawned = 0;
        while (spawned < count) {
            const gx = Math.floor(Math.random() * this.maze.cols);
            const gy = Math.floor(Math.random() * this.maze.rows);
            if (!this.maze.isSolid(gx, gy) && (gx > 3 || gy > 3)) {
                const enemy = new Enemy(gx, gy, this.maze);
                // Difficulty increase
                enemy.speed = 1.5 + (GameState.level * 0.2);
                this.enemies.push(enemy);
                spawned++;
            }
        }
    }

    placeBomb(gx, gy) {
        if (this.bombs.length < GameState.bombs) {
            const existing = this.bombs.find(b => b.gridX === gx && b.gridY === gy);
            if (!existing) {
                const bomb = new Bomb(gx, gy, GameState.explosionRadius, this.maze, (b) => this.onBombExplode(b));
                this.bombs.push(bomb);
            }
        }
    }

    onBombExplode(bomb) {
        this.bombs = this.bombs.filter(b => b !== bomb);
        const explosion = new Explosion(bomb.gridX, bomb.gridY, bomb.radius, this.maze, (e) => this.onExplosionComplete(e));
        this.explosions.push(explosion);
        this.handleExplosionDamage(explosion);
    }

    onExplosionComplete(explosion) {
        this.explosions = this.explosions.filter(e => e !== explosion);
    }

    handleExplosionDamage(explosion) {
        for (const cell of explosion.cells) {
            if (this.maze.grid[cell.y][cell.x] === 2) {
                this.maze.grid[cell.y][cell.x] = 0;
                GameState.score += 10;
                this.updateHUD();
                
                const rand = Math.random();
                if (rand < 0.25) {
                    this.questionManager.triggerQuestion();
                } else if (rand < 0.45) {
                    // Spawn powerup
                    const types = ['bomb', 'flame', 'speed'];
                    const pType = types[Math.floor(Math.random() * types.length)];
                    this.powerups.push(new PowerUp(cell.x, cell.y, pType, this.maze));
                }
            }
            
            // Damage powerups (destroy them)
            this.powerups = this.powerups.filter(p => p.gridX !== cell.x || p.gridY !== cell.y);
        }
    }

    playerHit() {
        if (this.player.invulnTimer > 0) return;
        
        GameState.lives--;
        this.updateHUD();
        if (GameState.lives <= 0) {
            GameState.isGameOver = true;
            this.showResultsScreen(false);
        } else {
            this.player.invulnTimer = 2000;
            this.player.gridX = 1;
            this.player.gridY = 1;
            this.player.x = this.maze.offsetX + this.player.gridX * this.maze.tileSize;
            this.player.y = this.maze.offsetY + this.player.gridY * this.maze.tileSize;
            this.player.targetX = this.player.x;
            this.player.targetY = this.player.y;
            this.player.isMoving = false;
        }
    }
    
    showResultsScreen(isWin) {
        document.getElementById('results-title').innerText = isWin ? 'MISSION COMPLETE' : 'GAME OVER';
        document.getElementById('results-title').style.color = isWin ? '#00ffcc' : '#ff0044';
        document.getElementById('results-score').innerText = `FINAL SCORE: ${GameState.score}`;
        
        if (isWin) {
            document.getElementById('btn-download-cert').style.display = 'inline-block';
        } else {
            document.getElementById('btn-download-cert').style.display = 'none';
        }
        
        document.getElementById('results-screen').classList.remove('hidden');
    }

    loop(currentTime) {
        if (GameState.isGameOver || GameState.isPaused) {
            this.animationId = requestAnimationFrame((t) => this.loop(t));
            return;
        }

        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;

        this.update(deltaTime);
        this.draw();

        this.animationId = requestAnimationFrame((t) => this.loop(t));
    }

    update(deltaTime) {
        this.player.update(deltaTime);
        
        // Collect powerups
        this.powerups = this.powerups.filter(p => {
            if (p.gridX === this.player.gridX && p.gridY === this.player.gridY) {
                if (p.type === 'bomb') GameState.bombs++;
                else if (p.type === 'flame') GameState.explosionRadius++;
                else if (p.type === 'speed') this.player.speed = Math.min(6, this.player.speed + 1);
                
                GameState.score += 25; // Security token points
                this.updateHUD();
                return false;
            }
            p.update(deltaTime);
            return true;
        });
        
        for (const enemy of this.enemies) {
            enemy.update(deltaTime);
            if (enemy.gridX === this.player.gridX && enemy.gridY === this.player.gridY) {
                this.playerHit();
            }
        }
        
        for (const bomb of this.bombs) {
            bomb.update(deltaTime);
        }
        
        for (const explosion of this.explosions) {
            explosion.update(deltaTime);
            
            // Continuous explosion collision detection
            for (const cell of explosion.cells) {
                const cx = this.maze.offsetX + cell.x * this.maze.tileSize;
                const cy = this.maze.offsetY + cell.y * this.maze.tileSize;
                const ts = this.maze.tileSize;
                
                const intersects = (x, y, size) => {
                    const padding = 6;
                    // Check intersection with a slight padding to be forgiving
                    return x + padding < cx + ts && x + size - padding > cx && 
                           y + padding < cy + ts && y + size - padding > cy;
                };

                // Player damage
                if (intersects(this.player.x, this.player.y, ts)) {
                    this.playerHit();
                }

                // Enemy damage
                this.enemies = this.enemies.filter(enemy => {
                    if (intersects(enemy.x, enemy.y, ts)) {
                        GameState.score += 50;
                        this.updateHUD();
                        return false;
                    }
                    return true;
                });
            }
        }
        
        // Check for level complete
        if (this.enemies.length === 0 && !GameState.isGameOver) {
            GameState.score += 250;
            GameState.isGameOver = true;
            this.updateHUD();
            this.showResultsScreen(true);
        }
    }

    draw() {
        this.ctx.fillStyle = '#111';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.maze.draw(this.ctx);
        
        for (const p of this.powerups) p.draw(this.ctx);
        for (const bomb of this.bombs) bomb.draw(this.ctx);
        for (const explosion of this.explosions) explosion.draw(this.ctx);
        for (const enemy of this.enemies) enemy.draw(this.ctx);
        
        this.player.draw(this.ctx);
    }
    
    updateHUD() {
        document.getElementById('hud-score').innerText = `SCORE: ${GameState.score}`;
        document.getElementById('hud-lives').innerText = `LIVES: ${'♥'.repeat(Math.max(0, GameState.lives))}`;
        document.getElementById('hud-level').innerText = `LEVEL: ${GameState.level.toString().padStart(2, '0')}`;
        document.getElementById('hud-combo').innerText = `COMBO: x${GameState.combo}`;
    }
}
