# CYBERBOMB: SECURITY SHOWDOWN

A polished, fun, browser-based cybersecurity awareness game inspired by classic top-down bomb-and-maze arcade games.

## Features Included:
- **Arcade Gameplay:** Move around, drop bombs, destroy boxes, and defeat malware bots!
- **Cybersecurity Challenges:** Answer phishing, password, and MFA questions to increase combo and score.
- **Power-ups:** Collect bombs, flame upgrades, and speed boosts.
- **Progressive Difficulty:** 8 levels of increasing enemy counts and speeds.
- **Scoring & Combo System:** Earn bonuses for fast and correct answers.

## Requirements
- A modern web browser.
- A local web server to serve the files (to avoid CORS issues with ES Modules).

## Installation & Running

Since this is built using standard ES Modules (Vanilla JS + HTML5 Canvas), you can run it using any simple static file server.

### Using Python 3:
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

### Using Node (http-server):
```bash
npx http-server -p 8080
```
Then open `http://localhost:8080` in your browser.

## Game Controls

- **W / Arrow Up**: Move Up
- **A / Arrow Left**: Move Left
- **S / Arrow Down**: Move Down
- **D / Arrow Right**: Move Right
- **SPACE**: Place Bomb

## Project Structure

- `index.html`: Main entry point, contains HUD and Menus.
- `src/main.js`: Game initialization and UI glue code.
- `src/game/`: Core game logic (`GameEngine.js`, `Player.js`, `Maze.js`, `Bomb.js`, `Explosion.js`, `Enemy.js`, `PowerUp.js`).
- `src/challenges/`: Cybersecurity question logic (`QuestionManager.js`).
- `src/systems/`: Game state and overarching systems (`GameState.js`).
- `src/data/`: Game data and question database (`questions.js`).

Enjoy learning cybersecurity while having fun!
