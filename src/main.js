import { GameEngine } from './game/GameEngine.js';
import { GameState } from './systems/GameState.js';

document.addEventListener('DOMContentLoaded', () => {
    // UI Elements
    const introOverlay = document.getElementById('intro-overlay');
    const startScreen = document.getElementById('start-screen');
    const resultsScreen = document.getElementById('results-screen');
    const hud = document.getElementById('hud');
    
    // Buttons
    const btnStartGame = document.getElementById('btn-start-game');
    const btnPlayAgain = document.getElementById('btn-play-again');
    const btnDownloadCert = document.getElementById('btn-download-cert');
    const nameInput = document.getElementById('player-name-input');
    
    // Game initialization
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    
    const gameEngine = new GameEngine(canvas, ctx);

    // Intro Animation Sequence
    setTimeout(() => {
        introOverlay.style.opacity = '0';
        setTimeout(() => {
            introOverlay.classList.add('hidden');
            startScreen.classList.remove('hidden');
        }, 1000); // Wait for transition
    }, 6000); // Intro duration

    btnStartGame.addEventListener('click', () => {
        let name = nameInput.value.trim();
        name = name.replace(/[<>]/g, '').substring(0, 20);
        
        if (name.length === 0) {
            name = "CyberDefender";
        }
        
        GameState.playerName = name;
        startGame();
    });
    
    btnPlayAgain.addEventListener('click', () => {
        window.location.reload();
    });
    
    btnDownloadCert.addEventListener('click', () => {
        downloadCertificate(GameState.playerName, GameState.score);
    });

    function startGame() {
        startScreen.classList.add('hidden');
        hud.classList.remove('hidden');
        gameEngine.start();
    }
    
    function downloadCertificate(name, score) {
        if (!window.jspdf) {
            alert("PDF library is still loading, please try again in a moment.");
            return;
        }
        
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4'
        });

        // Set background color
        doc.setFillColor(10, 10, 26);
        doc.rect(0, 0, 297, 210, 'F');

        // Draw border
        doc.setDrawColor(0, 255, 204);
        doc.setLineWidth(2);
        doc.rect(10, 10, 277, 190);
        
        // Inner border
        doc.setLineWidth(0.5);
        doc.rect(15, 15, 267, 180);

        // Title
        doc.setTextColor(255, 170, 0);
        doc.setFontSize(40);
        doc.setFont("courier", "bold");
        doc.text("CERTIFICATE OF COMPLETION", 148.5, 50, { align: "center" });
        
        // Subtitle
        doc.setTextColor(0, 255, 204);
        doc.setFontSize(20);
        doc.text("CYBERSECURITY AWARENESS MONTH 2026", 148.5, 70, { align: "center" });
        
        // Body
        doc.setTextColor(200, 200, 200);
        doc.setFontSize(16);
        doc.setFont("courier", "normal");
        doc.text("This certifies that", 148.5, 100, { align: "center" });

        // Name
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(30);
        doc.setFont("courier", "bold");
        doc.text(name, 148.5, 120, { align: "center" });
        
        // Description
        doc.setTextColor(200, 200, 200);
        doc.setFontSize(14);
        doc.setFont("courier", "normal");
        doc.text("Has successfully completed the CyberBomb", 148.5, 140, { align: "center" });
        doc.text("training exercise by GSC Infosec with a final score of:", 148.5, 150, { align: "center" });
        
        // Score
        doc.setTextColor(0, 255, 204);
        doc.setFontSize(28);
        doc.setFont("courier", "bold");
        doc.text(score.toString(), 148.5, 165, { align: "center" });
        
        // Footer
        doc.setTextColor(150, 150, 150);
        doc.setFontSize(12);
        doc.setFont("courier", "italic");
        doc.text("Congratulations on your commitment to defending the network!", 148.5, 185, { align: "center" });

        // Save
        doc.save(`CyberBomb_Certificate_${name.replace(/\s+/g, '_')}.pdf`);
    }
});
