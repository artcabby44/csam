import { questions } from '../data/questions.js';
import { GameState } from '../systems/GameState.js';

export class QuestionManager {
    constructor(engine) {
        this.engine = engine;
        this.modal = document.getElementById('question-modal');
        this.titleEl = document.getElementById('q-title');
        this.timerEl = document.getElementById('q-timer');
        this.contentEl = document.getElementById('q-content');
        this.optionsEl = document.getElementById('q-options');
        this.feedbackEl = document.getElementById('q-feedback');
        this.btnContinue = document.getElementById('btn-q-continue');
        
        this.activeQuestion = null;
        this.timerInterval = null;
        this.timeRemaining = 0;
        
        this.btnContinue.addEventListener('click', () => this.closeQuestion());
    }

    triggerQuestion() {
        // Pause the game
        GameState.isPaused = true;
        
        // Pick a random question
        const qIndex = Math.floor(Math.random() * questions.length);
        this.activeQuestion = questions[qIndex];
        
        this.setupModal();
        this.modal.classList.remove('hidden');
        
        // Start timer (15 seconds)
        this.timeRemaining = 15;
        this.updateTimerDisplay();
        
        this.timerInterval = setInterval(() => {
            this.timeRemaining -= 0.1;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.timeRemaining = 0;
                this.updateTimerDisplay();
                this.handleTimeout();
            }
        }, 100);
    }

    setupModal() {
        this.titleEl.innerText = this.activeQuestion.question;
        this.contentEl.innerHTML = this.activeQuestion.content;
        
        this.optionsEl.innerHTML = '';
        this.activeQuestion.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.innerText = opt;
            btn.onclick = () => this.handleAnswer(opt);
            this.optionsEl.appendChild(btn);
        });
        
        this.feedbackEl.classList.add('hidden');
        this.btnContinue.classList.add('hidden');
        this.optionsEl.style.display = 'flex';
    }

    updateTimerDisplay() {
        this.timerEl.innerText = `TIME: ${this.timeRemaining.toFixed(1)}s`;
    }

    handleAnswer(selectedOption) {
        clearInterval(this.timerInterval);
        
        const isCorrect = selectedOption === this.activeQuestion.correctAnswer;
        const answerTime = 15 - this.timeRemaining;
        
        GameState.questionsAnswered++;
        GameState.totalAnswerTime += answerTime;
        
        if (!GameState.fastestAnswer || answerTime < GameState.fastestAnswer) {
            GameState.fastestAnswer = answerTime;
        }
        
        let feedbackHTML = '';
        
        if (isCorrect) {
            GameState.correctAnswers++;
            GameState.combo++;
            if (GameState.combo > GameState.maxCombo) GameState.maxCombo = GameState.combo;
            
            let points = 100 * GameState.combo;
            if (answerTime < 5) points += 100;
            else if (answerTime < 10) points += 75;
            else points += 50;
            
            GameState.score += points;
            
            feedbackHTML = `
                <h3 style="color: #00ffcc;">✓ CORRECT!</h3>
                <div style="color: #00ffcc; font-weight: bold;">+${points} POINTS</div>
                <div style="margin-top: 10px;"><strong>Why?</strong> ${this.activeQuestion.explanation}</div>
                <div style="margin-top: 10px; color: #ff00ff;"><strong>CYBER TIP:</strong> ${this.activeQuestion.cyberTip}</div>
            `;
        } else {
            GameState.incorrectAnswers++;
            GameState.combo = 0;
            
            feedbackHTML = `
                <h3 style="color: #ff0044;">✕ NOT QUITE</h3>
                <div style="margin-top: 10px;"><strong>Correct Answer:</strong> ${this.activeQuestion.correctAnswer}</div>
                <div style="margin-top: 10px;"><strong>Why?</strong> ${this.activeQuestion.explanation}</div>
                <div style="margin-top: 10px; color: #ff00ff;"><strong>CYBER TIP:</strong> ${this.activeQuestion.cyberTip}</div>
            `;
        }
        
        this.optionsEl.style.display = 'none';
        this.feedbackEl.innerHTML = feedbackHTML;
        this.feedbackEl.classList.remove('hidden');
        this.btnContinue.classList.remove('hidden');
        
        this.engine.updateHUD();
    }

    handleTimeout() {
        clearInterval(this.timerInterval);
        GameState.questionsAnswered++;
        GameState.incorrectAnswers++;
        GameState.combo = 0;
        
        this.optionsEl.style.display = 'none';
        this.feedbackEl.innerHTML = `
            <h3 style="color: #ff0044;">✕ TIME'S UP!</h3>
            <div style="margin-top: 10px;"><strong>Correct Answer:</strong> ${this.activeQuestion.correctAnswer}</div>
            <div style="margin-top: 10px;"><strong>Why?</strong> ${this.activeQuestion.explanation}</div>
            <div style="margin-top: 10px; color: #ff00ff;"><strong>CYBER TIP:</strong> ${this.activeQuestion.cyberTip}</div>
        `;
        this.feedbackEl.classList.remove('hidden');
        this.btnContinue.classList.remove('hidden');
        
        this.engine.updateHUD();
    }

    closeQuestion() {
        this.modal.classList.add('hidden');
        GameState.isPaused = false;
    }
}
