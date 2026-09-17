# CYBERBOMB — CYBERSECURITY AWARENESS GAME

## Master Development Prompt

Build a polished, fun, browser-based cybersecurity awareness game inspired by classic top-down bomb-and-maze arcade games.

The game should combine:

**Arcade gameplay + maze exploration + bombs + enemies + power-ups + cybersecurity challenges + scoring + leaderboard + employee awareness training.**

The final product should feel like a real game rather than a quiz with a game attached to it.

---

# 1. PROJECT OVERVIEW

## Game Name

**CyberBomb: Security Showdown**

Alternative subtitle:

**Defend. Detect. Destroy.**

## Concept

The player controls an original cybersecurity defender navigating a grid-based maze.

The player can:

* Move around the map
* Place bombs
* Destroy breakable cybersecurity-themed boxes
* Defeat enemies
* Collect power-ups
* Discover hidden cybersecurity challenges
* Answer challenges correctly to earn points
* Build score multipliers
* Progress through increasingly difficult levels
* Fight cybersecurity-themed bosses
* Compete on a leaderboard

The cybersecurity challenges should be naturally integrated into gameplay.

The core gameplay loop should be:

**EXPLORE → BOMB → DESTROY → DISCOVER → IDENTIFY → ANSWER → EARN POINTS → POWER UP → SURVIVE → LEVEL UP**

---

# 2. IMPORTANT COPYRIGHT REQUIREMENT

Do NOT copy:

* Bomberman characters
* Bomberman sprites
* Bomberman logos
* Bomberman sounds
* Bomberman artwork
* Exact copyrighted maps
* Exact copyrighted UI

The game may be inspired by the general concept of a top-down bomb maze arcade game, but all characters, artwork, names, animations, UI, sounds, environments, and assets must be original.

Use an original cybersecurity/cyberpunk visual identity.

---

# 3. TARGET AUDIENCE

The primary audience is:

**Corporate employees participating in cybersecurity awareness training.**

The game should be understandable by non-technical employees.

Do not assume the player understands:

* Networking
* Programming
* Linux
* Security engineering
* Penetration testing
* Cryptography

Questions should focus primarily on practical workplace cybersecurity.

---

# 4. GAME MODES

Create three game modes.

## MODE 1 — TRAINING

Purpose:

Cybersecurity learning.

Characteristics:

* Unlimited or generous lives
* No harsh penalties
* Detailed explanations
* Slower enemies
* More beginner questions
* Players can learn from mistakes

Display:

**TRAINING MODE**

"Learn cybersecurity while you play."

---

## MODE 2 — CHALLENGE

Purpose:

Competitive gameplay.

Characteristics:

* Limited lives
* Faster enemies
* Harder questions
* Time-based bonuses
* Larger score multipliers
* More difficult maps
* More dangerous explosions

Display:

**CHALLENGE MODE**

"How strong are your cybersecurity instincts?"

---

## MODE 3 — EMPLOYEE AWARENESS

Purpose:

Corporate cybersecurity awareness assessment.

Session duration:

Approximately 5–10 minutes.

The game should generate a final awareness summary.

Example:

Cybersecurity Awareness Score

**87%**

Phishing Detection:

**92%**

Password Awareness:

**85%**

MFA Awareness:

**90%**

Average Response Time:

**7.4 seconds**

Questions Answered:

**25**

Correct:

**22**

Incorrect:

**3**

This mode should emphasize learning rather than simply winning.

---

# 5. START SCREEN

Create an attractive start screen.

Show:

# CYBERBOMB

### SECURITY SHOWDOWN

Buttons:

* PLAY
* TRAINING
* CHALLENGE
* EMPLOYEE AWARENESS
* LEADERBOARD
* HOW TO PLAY
* SETTINGS

Also show a short tagline:

**"Destroy threats. Detect scams. Defend the network."**

---

# 6. PLAYER NAME

Before starting a game:

Ask:

**Enter your player name**

Input validation:

* Maximum 20 characters
* Trim whitespace
* Prevent HTML/script injection
* Allow letters, numbers, spaces, underscore, and hyphen
* Reject empty names

Example:

`CyberDefender`

Do not collect unnecessary personal information.

---

# 7. GAME BOARD

Use a grid-based maze.

Example:

13 × 13

or dynamically generate:

15 × 15
17 × 17
19 × 19

depending on difficulty.

The map should contain:

* Permanent walls
* Breakable boxes
* Open spaces
* Player
* Enemies
* Bombs
* Explosions
* Power-ups
* Question boxes
* Security tokens
* Exit/objective

Use HTML Canvas if appropriate for smooth arcade gameplay.

---

# 8. CYBERSECURITY ENVIRONMENT

Use original cybersecurity-themed objects.

Permanent walls can look like:

* Server racks
* Firewall barriers
* Network infrastructure
* Security panels

Breakable boxes can look like:

* Encrypted data blocks
* Server crates
* Malware containers
* Suspicious files
* Security terminals

Power-ups can look like:

* Security shields
* MFA tokens
* Firewall icons
* Encryption keys
* Network packets

---

# 9. PLAYER

Create an original character.

Example concept:

A small futuristic cybersecurity defender wearing a digital security suit.

Character states:

* Idle
* Walking
* Bomb placement
* Taking damage
* Victory
* Defeat

The character should be visually distinctive but simple enough for an arcade game.

---

# 10. MOVEMENT

Keyboard controls:

**W / Arrow Up**
Move up

**A / Arrow Left**
Move left

**S / Arrow Down**
Move down

**D / Arrow Right**
Move right

**SPACE**
Place bomb

**ESC**
Pause

Optional:

Add on-screen controls for mobile/tablet.

---

# 11. BOMBS

The player can place bombs.

Default:

* Bomb capacity: 1
* Explosion radius: 1–2 tiles
* Countdown: approximately 2–3 seconds

Bomb sequence:

**PLACE → COUNTDOWN → WARNING → EXPLOSION → CLEAR**

Explosion travels:

* Up
* Down
* Left
* Right

Explosion stops when hitting:

* Permanent wall
* Map boundary

Explosion destroys:

* Breakable boxes
* Enemies
* Certain objects

Explosion can hurt:

* Player
* Enemies

The player must be able to strategically use bombs.

---

# 12. POWER-UPS

Add cybersecurity-themed power-ups.

## Firewall Shield

Temporarily protects player from one explosion or enemy hit.

## MFA Token

Adds temporary protection against enemy attacks.

## Encryption Key

Increases score multiplier.

## Network Booster

Increases movement speed.

## Firewall Upgrade

Increases explosion radius.

## Backup Token

Adds one extra life.

## Security Toolkit

Allows the player to carry an additional bomb.

## Threat Scanner

Temporarily highlights nearby question boxes and enemies.

---

# 13. ENEMIES

Create original cybersecurity-themed enemies.

Examples:

### Malware Bot

Basic enemy.

Slow movement.

### Phishing Drone

Moves unpredictably.

### Ransomware Virus

Moves faster and may temporarily block paths.

### Trojan

Can hide behind breakable boxes.

### Botnet Node

Spawns smaller enemies.

Each enemy should have different behavior.

Do not make the game excessively difficult.

---

# 14. QUESTION BOX SYSTEM

Some breakable boxes contain cybersecurity challenges.

When a question box is destroyed:

1. Pause gameplay.
2. Display the challenge.
3. Start a response timer.
4. Player answers.
5. Calculate score.
6. Display explanation.
7. Resume gameplay.

Do NOT make every box a question.

Some boxes should contain:

* Nothing
* Points
* Power-ups
* Security tokens
* Questions

This creates exploration and uncertainty.

---

# 15. CYBERSECURITY CHALLENGE TYPES

Create multiple challenge types.

Do NOT make every challenge a traditional multiple-choice question.

Use the following challenge types.

---

# 16. CHALLENGE TYPE — PHISHING OR SAFE

Show a realistic workplace email, SMS, chat message, or notification.

Ask:

# PHISHING OR SAFE?

Buttons:

**PHISHING**

**SAFE**

The player must determine whether the message is suspicious.

---

## Example 1

From:

`security-alert@micros0ft-support.example`

Message:

"Your account will be permanently disabled within 30 minutes. Click here to verify your password."

Correct:

**PHISHING**

Reasons:

* Suspicious sender domain
* Urgency
* Requests account verification
* Requests sensitive credentials

---

## Example 2

From:

`it-helpdesk@company.example`

Message:

"Your password will expire in 7 days. Access the normal company password portal using your usual bookmark."

Correct:

**SAFE**

Explain:

The message does not ask the user to provide their password and directs them to the normal trusted portal.

---

# 17. PHISHING CHALLENGE DIFFICULTY

Do not make every phishing example obvious.

Create:

### EASY

Obvious fake domains.

Examples:

`micros0ft.com`

`paypa1-security.example`

`company-password-reset.example`

### MEDIUM

More realistic messages.

Examples:

* HR messages
* Delivery notifications
* Microsoft 365 notifications
* Payroll messages
* Invoice requests
* Account warnings

### HARD

Subtle workplace scenarios.

Examples:

* Business Email Compromise
* Executive impersonation
* MFA fatigue
* OAuth consent phishing
* Fake shared documents
* Fake Teams/Slack messages
* Fake password reset notifications

---

# 18. PHISHING CLUE SYSTEM

Add a special challenge:

# FIND THE PHISHING CLUE

Display an email interface.

Example:

From:

`support@micros0ft-security.example`

Subject:

`URGENT: Your Account Will Be Deleted`

Message:

"Your account has been compromised. Verify your credentials immediately."

Button:

`VERIFY ACCOUNT`

Allow the player to click suspicious areas.

Selectable areas:

* Sender
* Subject
* Message
* Link
* Attachment

Reward the player for identifying the correct clues.

Example:

Correct sender identification:

+50

Correct urgency identification:

+50

Correct suspicious link:

+50

Correct attachment identification:

+50

---

# 19. CHALLENGE TYPE — STRONG OR WEAK PASSWORD

Display a password.

Ask:

# STRONG OR WEAK?

Buttons:

**STRONG**

**WEAK**

Evaluate password characteristics based on:

* Length
* Predictability
* Common patterns
* Dictionary words
* Personal information
* Reuse
* Randomness

---

## Example

Password:

`Password123!`

Correct:

**WEAK**

Reason:

Common password pattern and predictable structure.

---

## Example

Password:

`Summer2026!`

Correct:

**WEAK**

Reason:

Adding a year and symbol to a common word remains predictable.

---

## Example

Password:

`correct-horse-battery-mountain`

Correct:

**STRONG**

Reason:

Long passphrase with multiple unrelated words.

Mention that in real-world use, passwords should be unique and preferably generated/stored by a password manager.

---

## Example

Password:

`X7!qP2#vL9@rT4$z`

Correct:

**STRONG**

Reason:

Long, random, and difficult to guess.

---

# 20. PASSWORD BUILDER CHALLENGE

Show:

`john1998`

Ask:

# HOW WOULD YOU IMPROVE THIS PASSWORD?

Choices:

A. `John1998!`

B. `John1998@123`

C. Use a unique randomly generated password

D. `John2026!!!`

Correct:

**C**

Explanation:

Predictable changes such as adding symbols or changing the year do not make personal information-based passwords sufficiently strong.

---

# 21. PASSWORD EDUCATION

Teach the player:

Strong passwords should generally be:

* Long
* Unique
* Random or unpredictable
* Not based on personal information
* Not reused across accounts

Recommend:

**Password managers**

Explain that users should not reuse the same password across multiple accounts.

---

# 22. OTHER CYBERSECURITY CHALLENGES

Add additional challenge types.

## MFA Challenge

Example:

"You receive three unexpected MFA prompts that you did not initiate. What should you do?"

Correct:

"Do not approve them. Report the activity and change your password/contact IT according to company procedure."

---

## SOCIAL ENGINEERING

Example:

"Someone calls claiming to be IT and asks for your password to fix your account."

Correct response:

"Do not provide the password. Verify the person's identity through an official channel."

---

## USB SECURITY

Example:

"You find an unknown USB drive in the office."

Correct response:

"Do not plug it into your computer. Follow company security procedures."

---

## SAFE BROWSING

Example:

"A website asks you to install a browser extension to view a document."

Ask whether this is safe.

---

## RANSOMWARE

Example:

"Your computer suddenly displays a ransom message and files cannot be opened."

Ask:

"What should you do first?"

Focus on:

* Reporting
* Isolating according to company procedure
* Not paying or interacting unnecessarily
* Contacting IT/security

---

## INCIDENT REPORTING

Example:

"You accidentally clicked a suspicious link and entered your credentials."

Correct response:

"Report it immediately according to company procedure."

Emphasize:

**Fast reporting can reduce damage.**

---

# 23. QUESTION DATABASE

Create at least:

**100 cybersecurity challenges**

Recommended distribution:

30 Phishing vs Safe

20 Strong vs Weak Password

10 Password Builder

10 MFA

10 Social Engineering

5 USB/Device Security

5 Safe Browsing

5 Malware/Ransomware

5 Incident Reporting

Questions should have:

* ID
* Category
* Difficulty
* Challenge type
* Question/scenario
* Options where applicable
* Correct answer
* Explanation
* Cyber tip
* Base points

Example structure:

```javascript
{
    id: 1,
    type: "phishing",
    category: "Phishing",
    difficulty: "easy",
    question: "Is this message phishing or safe?",
    content: {
        sender: "security-alert@example.com",
        subject: "Urgent Account Verification",
        body: "Your account will be disabled today. Click the link below."
    },
    options: [
        "PHISHING",
        "SAFE"
    ],
    correctAnswer: "PHISHING",
    explanation: "The message uses urgency and requests account verification through an unexpected link.",
    cyberTip: "Verify suspicious requests using a trusted channel.",
    points: 100
}
```

Keep the question database separate from the game engine so it can easily be updated.

---

# 24. QUESTION RANDOMIZATION

Randomize:

* Question order
* Question type
* Difficulty
* Question location
* Question box location

Do not repeat the same question during one game session.

Questions should be selected according to the selected difficulty.

---

# 25. SCORING

Create a detailed scoring system.

Correct answer:

**+100 points**

Destroying question box:

**+10 points**

Defeating enemy:

**+50 points**

Collecting security token:

**+25 points**

Completing level:

**+250 points**

No-damage level completion:

**+100 points**

---

# 26. SPEED BONUS

Reward fast answers.

Under 5 seconds:

**+100**

5–10 seconds:

**+75**

10–20 seconds:

**+50**

20–30 seconds:

**+25**

Over 30 seconds:

**No bonus**

---

# 27. COMBO SYSTEM

Consecutive correct answers increase the multiplier.

1 correct:

1x

2 correct:

2x

3 correct:

3x

4–9 correct:

4x

10+ correct:

5x

Incorrect answer:

Reset combo.

Display:

**CYBER COMBO x4**

Animate the combo indicator.

---

# 28. CORRECT ANSWER FEEDBACK

After a correct answer:

# ✓ CORRECT!

**+250 POINTS**

**Why?**

Short explanation.

**CYBER TIP**

Short practical tip.

Example:

> ✓ CORRECT!
>
> +225 POINTS
>
> **Why?**
> The sender domain does not match the legitimate organization.
>
> **CYBER TIP**
> Always inspect the sender and domain before clicking links.

Then allow:

**CONTINUE**

---

# 29. INCORRECT ANSWER FEEDBACK

Show:

# ✕ NOT QUITE

**Correct Answer: PHISHING**

Explain why.

Keep feedback educational rather than insulting.

Example:

> ✕ NOT QUITE
>
> Correct Answer:
> **PHISHING**
>
> **Why?**
> The message creates urgency and directs you to a suspicious login page.
>
> **CYBER TIP**
> When something feels urgent, slow down and verify it through a trusted channel.

---

# 30. HUD

During gameplay show:

```text
┌───────────────────────────────────────┐
│ SCORE       LIVES     LEVEL     COMBO │
│ 4,250        ♥♥       03        x3    │
│                                       │
│ QUESTIONS     ACCURACY    TIME        │
│ 12/15         92%         02:31       │
└───────────────────────────────────────┘
```

Also display:

* Bomb capacity
* Explosion radius
* Active power-ups

Keep the HUD clean and readable.

---

# 31. LEVEL SYSTEM

Create at least 8 levels.

## LEVEL 1

### SECURITY BASICS

Topics:

* Basic cybersecurity
* Passwords
* Phishing

Easy enemies.

---

## LEVEL 2

### PHISHING ALLEY

Topics:

* Phishing
* Suspicious links
* Email security

Introduce more question boxes.

---

## LEVEL 3

### MALWARE LAB

Topics:

* Malware
* Ransomware
* Downloads
* Attachments

Introduce stronger enemies.

---

## LEVEL 4

### NETWORK DEFENSE

Topics:

* Wi-Fi
* VPN
* Network security
* Secure browsing

---

## LEVEL 5

### RANSOMWARE FACILITY

Topics:

* Ransomware
* Backups
* Incident response
* Reporting

---

## LEVEL 6

### CLOUD FORTRESS

Topics:

* Cloud security
* Account protection
* MFA
* Access control

---

## LEVEL 7

### ZERO TRUST ZONE

Topics:

* Identity
* MFA
* Least privilege
* Access requests
* Social engineering

---

## LEVEL 8

### INCIDENT RESPONSE

Advanced awareness scenarios.

Topics:

* Compromised accounts
* Phishing incidents
* Credential theft
* Suspicious login activity
* Reporting

---

# 32. BOSS LEVEL

Create a cybersecurity-themed boss:

# THE BREACH

The boss represents a simulated cyberattack.

The boss should have:

* Large health bar
* Attack patterns
* Security barriers
* Attack zones
* Minions

The player weakens the boss by:

* Destroying security nodes
* Collecting security keys
* Answering cybersecurity challenges correctly

Correct answer:

Boss takes damage.

Incorrect answer:

Boss becomes stronger or player loses protection.

Keep the boss encounter fun and symbolic rather than depicting real-world attack instructions.

---

# 33. FINAL RESULTS

After the game:

# MISSION COMPLETE

Show:

Score

Accuracy

Questions Answered

Correct Answers

Incorrect Answers

Fastest Answer

Average Answer Time

Best Combo

Levels Completed

Enemies Defeated

Power-ups Collected

---

Example:

```text
MISSION COMPLETE

SCORE
8,450

ACCURACY
92%

QUESTIONS
25

CORRECT
23

INCORRECT
2

FASTEST ANSWER
3.2 sec

BEST COMBO
8x

LEVEL
6 / 8
```

Buttons:

* PLAY AGAIN
* CHALLENGE MODE
* LEADERBOARD
* EXIT

---

# 34. CYBERSECURITY AWARENESS SUMMARY

For Employee Awareness Mode, provide category-level results.

Example:

```text
CYBERSECURITY AWARENESS REPORT

Overall Awareness
87%

Phishing Detection
92%

Password Security
85%

MFA Awareness
90%

Social Engineering
82%

Incident Reporting
95%

Average Response Time
7.4 seconds
```

Show recommendations based on incorrect answers.

Example:

**Focus Area: Password Security**

"Review password uniqueness and password manager best practices."

Do not shame the employee.

---

# 35. ACHIEVEMENTS

Add achievements.

Examples:

### PHISHING HUNTER

Correctly identify 10 phishing attempts.

### PASSWORD GUARDIAN

Correctly identify 10 strong/weak passwords.

### MFA MASTER

Answer 10 MFA challenges correctly.

### CYBER DETECTIVE

Identify 25 phishing clues.

### ZERO TRUST

Complete a level without taking damage.

### SPEED DEFENDER

Answer a question in under 3 seconds.

### THREAT TERMINATOR

Defeat 25 enemies.

### SECURITY LEGEND

Complete all levels.

---

# 36. LEADERBOARD

Create a leaderboard.

Columns:

* Rank
* Player
* Score
* Accuracy
* Questions
* Best Combo
* Level
* Completion Time

Filters:

* Today
* This Week
* This Month
* All Time

Example:

```text
CYBERBOMB LEADERBOARD

#   PLAYER          SCORE    ACCURACY
1   CyberFox        12,450   98%
2   NetGuardian     11,820   95%
3   ByteKnight      10,900   93%
4   SecurityPro      9,850   91%
5   CyberAgent       9,420   89%
```

Use fictional/mock leaderboard data if no backend exists.

---

# 37. BACKEND ARCHITECTURE

Design the application so a backend can be added.

Potential architecture:

Frontend:

* React or vanilla JavaScript
* HTML5 Canvas
* CSS

Backend:

* Node.js
* Express
* REST API

Database:

* PostgreSQL
* MySQL
* Supabase
* Firebase

The frontend should NOT be trusted with final scores.

If a backend is implemented:

* Validate score server-side
* Validate game session
* Rate-limit score submissions
* Sanitize player names
* Detect impossible scores
* Prevent duplicate submissions
* Use authentication if required
* Do not expose secrets in frontend code

---

# 38. SECURITY REQUIREMENTS

Because this is a cybersecurity training application, follow secure development practices.

Frontend:

* Prevent XSS
* Sanitize user input
* Avoid unsafe HTML injection
* Validate all input
* Avoid hardcoded secrets

Backend:

* Validate all requests
* Authenticate where necessary
* Authorize leaderboard operations
* Rate-limit APIs
* Validate game sessions
* Log suspicious activity
* Use secure database queries
* Never trust client-provided scores

Never place:

* API keys
* Database passwords
* Service credentials
* Authentication secrets

inside frontend JavaScript.

---

# 39. ACCESSIBILITY

Support:

* Keyboard controls
* Mouse controls
* Touch controls
* High contrast
* Reduced motion
* Readable fonts
* Large buttons
* Clear focus states
* Screen-reader-friendly challenge text
* Color-independent feedback

Do not rely only on:

Red = wrong

Green = correct

Also include:

✓ CORRECT

✕ INCORRECT

---

# 40. RESPONSIVE DESIGN

Desktop is the primary platform.

Also support:

* Laptop
* Tablet
* Mobile

At small screen sizes:

* Resize game board
* Reflow HUD
* Make answer buttons large
* Provide touch controls
* Prevent horizontal page overflow

---

# 41. AUDIO

Add optional sound effects.

Sounds:

* Bomb placed
* Countdown
* Explosion
* Box destroyed
* Correct answer
* Incorrect answer
* Power-up
* Enemy defeated
* Level completed
* Boss warning
* Game over

Provide:

**🔊 SOUND ON/OFF**

Do not autoplay audio before user interaction.

---

# 42. VISUAL STYLE

Use a modern cybersecurity arcade aesthetic.

Visual inspiration:

**Cyberpunk + pixel arcade + enterprise cybersecurity**

Use:

* Dark interface
* Grid-based environment
* Security-themed graphics
* Digital effects
* Particle effects
* Explosion animations
* Score popups
* Combo animations
* Shield animations

Avoid excessive visual clutter.

The game should look professional enough to demonstrate during a corporate cybersecurity awareness campaign.

---

# 43. UI DESIGN

Create polished UI components.

Use:

* Rounded panels
* Clear typography
* Consistent spacing
* Strong visual hierarchy
* Animated transitions
* Progress indicators
* Large answer buttons

Question modal should be the main focus when a challenge appears.

Example:

```text
┌───────────────────────────────────────────┐
│             CYBER CHALLENGE               │
│                                           │
│  Is this message PHISHING or SAFE?        │
│                                           │
│  From: security@micros0ft.example         │
│                                           │
│  "Your account will be disabled today."   │
│                                           │
│  [ 🛑 PHISHING ]     [ 🛡 SAFE ]          │
│                                           │
│              TIME: 08.4s                  │
└───────────────────────────────────────────┘
```

---

# 44. GAME STATE

Create a centralized game state.

Example:

```javascript
const gameState = {
    playerName: "",
    score: 0,
    lives: 3,
    level: 1,
    combo: 0,
    maxCombo: 0,
    questionsAnswered: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    fastestAnswer: null,
    totalAnswerTime: 0,
    bombs: 1,
    explosionRadius: 1,
    gameMode: "training",
    difficulty: "easy",
    isPaused: false,
    isGameOver: false
};
```

Keep game state predictable and easy to debug.

---

# 45. ARCHITECTURE

Use modular code.

Recommended structure:

```text
cyberbomb/
│
├── README.md
├── package.json
├── game-requirements.md
│
├── public/
│   ├── assets/
│   ├── sprites/
│   ├── sounds/
│   └── icons/
│
├── src/
│   ├── game/
│   │   ├── GameEngine.js
│   │   ├── Player.js
│   │   ├── Bomb.js
│   │   ├── Explosion.js
│   │   ├── Enemy.js
│   │   ├── Maze.js
│   │   └── PowerUp.js
│   │
│   ├── challenges/
│   │   ├── QuestionManager.js
│   │   ├── phishing.js
│   │   ├── passwords.js
│   │   ├── mfa.js
│   │   └── socialEngineering.js
│   │
│   ├── ui/
│   │   ├── HUD.js
│   │   ├── QuestionModal.js
│   │   ├── ResultsScreen.js
│   │   └── Leaderboard.js
│   │
│   ├── systems/
│   │   ├── ScoreSystem.js
│   │   ├── AudioManager.js
│   │   ├── AchievementSystem.js
│   │   └── GameState.js
│   │
│   └── data/
│       └── questions.js
│
└── index.html
```

Adapt the structure if another architecture is more appropriate.

---

# 46. PERFORMANCE

The game should run smoothly in modern browsers.

Target:

**60 FPS**

Avoid unnecessary:

* DOM manipulation
* Canvas redraws
* Timers
* Memory allocations
* Event listeners

Use:

`requestAnimationFrame()`

for the main game loop.

Clean up:

* Timers
* Event listeners
* Animation frames
* Audio resources

when restarting or exiting the game.

---

# 47. RANDOM MAZE GENERATION

Generate maps procedurally.

Each level should be different.

Guarantee:

* Player has a valid starting area
* At least one reachable path exists
* Question boxes are reachable
* Exit/objective is reachable
* Enemies do not spawn directly on player
* Bomb explosions behave correctly

Avoid generating impossible maps.

---

# 48. DIFFICULTY

Create:

## EASY

* Slow enemies
* Large safe areas
* Beginner questions
* Longer answer timers
* More power-ups

## MEDIUM

* Normal enemies
* Moderate maze complexity
* Mixed questions
* Moderate timer

## HARD

* Fast enemies
* Complex maps
* Advanced scenarios
* Shorter timers
* Fewer power-ups

---

# 49. EDUCATIONAL PRINCIPLES

The game should teach behavior, not just memorization.

Prioritize:

* Recognizing phishing
* Inspecting sender addresses
* Inspecting suspicious domains
* Avoiding suspicious links
* Avoiding unexpected attachments
* Reporting suspicious activity
* Using strong unique passwords
* Using password managers
* Using MFA
* Protecting devices
* Installing updates
* Handling USB devices safely
* Protecting sensitive information

Questions should use realistic workplace scenarios.

---

# 50. QUESTION QUALITY

Avoid trick questions.

The correct answer should be defensible according to normal cybersecurity best practices.

Do not create questions where:

* Two answers are equally correct
* The wording is intentionally confusing
* The answer depends on obscure technical knowledge
* The player must guess what the developer intended

Each question must have:

**ONE clearly preferred answer.**

For nuanced situations, explain the reasoning after the answer.

---

# 51. PHISHING REALISM

Make phishing scenarios realistic.

Include:

* Fake Microsoft 365 alerts
* Fake Google Workspace alerts
* Fake HR requests
* Fake payroll messages
* Fake invoices
* Fake delivery notifications
* Fake shared documents
* Fake password expiration warnings
* Fake account lockouts
* Fake executive requests
* Fake MFA notifications

Use fictional domains.

Do not accidentally use real organizations' malicious-looking domains in a way that could cause confusion.

---

# 52. PASSWORD REALISM

Include examples that teach:

Weak:

`password`

`Password123`

`Summer2026!`

`John1998!`

`CompanyName123!`

Strong:

Long random passwords

Long unique passphrases

Randomly generated password-manager examples

Make clear that:

**Complex-looking does not automatically mean strong.**

Length and unpredictability matter.

---

# 53. END-OF-GAME LEARNING

After the final score, show:

## WHAT YOU LEARNED

Example:

✓ You correctly identified 14 of 15 phishing attempts.

✓ You recognized strong passwords 9 of 10 times.

✓ You correctly handled 5 MFA scenarios.

Then show:

### CYBER TIPS

1. Slow down when a message creates urgency.
2. Inspect the sender and domain.
3. Never share your password.
4. Use unique passwords.
5. Use MFA.
6. Report suspicious activity quickly.

---

# 54. NO REAL CYBER ATTACK INSTRUCTIONS

The game is educational and defensive.

Do not include:

* Real credential theft instructions
* Malware creation
* Exploit development
* Real attack payloads
* Instructions for compromising systems
* Real phishing campaigns
* Credential harvesting infrastructure

All scenarios should remain simulated and awareness-focused.

---

# 55. TESTING

Before considering the game complete, test:

### Gameplay

* Player movement
* Collision
* Bomb placement
* Bomb countdown
* Explosion
* Wall blocking
* Box destruction
* Enemy movement
* Enemy collision
* Player damage
* Lives
* Level progression

### Cybersecurity challenges

* Question appears
* Game pauses
* Timer works
* Correct answer works
* Incorrect answer works
* Explanation appears
* Score updates
* Combo updates
* Challenge closes correctly

### UI

* Start screen
* Game screen
* Pause menu
* Question modal
* Results
* Leaderboard
* Settings

### Edge cases

* Player submits no answer
* Player answers after timer expires
* Player dies while challenge is open
* Player restarts
* Player quits
* Multiple question boxes
* Very fast repeated inputs
* Small mobile screens

---

# 56. DEVELOPMENT APPROACH

Do not attempt to build everything at once.

Build in phases.

## PHASE 1

Create:

* Start screen
* Player
* Grid
* Movement
* Walls
* Breakable boxes

## PHASE 2

Add:

* Bombs
* Explosions
* Collision
* Enemies

## PHASE 3

Add:

* Question boxes
* Question modal
* Phishing challenges
* Password challenges

## PHASE 4

Add:

* Scoring
* Combo
* Power-ups
* Difficulty

## PHASE 5

Add:

* Multiple levels
* Boss
* Achievements

## PHASE 6

Add:

* Leaderboard
* Employee Awareness Mode
* Results dashboard

## PHASE 7

Polish:

* Animations
* Audio
* Responsive design
* Accessibility
* Performance
* Security

---

# 57. IMPORTANT IMPLEMENTATION RULE

Do not provide only pseudocode.

Build the actual working application.

When generating code:

* Provide complete files
* Ensure imports work
* Ensure variables are defined
* Ensure buttons work
* Ensure keyboard controls work
* Ensure the game can start immediately
* Ensure the application can be run locally

If something is not implemented yet, do not create a fake button that does nothing.

---

# 58. README

Create a complete README.md containing:

## Installation

Example:

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production

```bash
npm run build
```

## Game Controls

```text
W / Arrow Up       Move Up
A / Arrow Left     Move Left
S / Arrow Down     Move Down
D / Arrow Right    Move Right
SPACE              Place Bomb
ESC                Pause
```

Explain:

* Project structure
* How to add questions
* How to modify scoring
* How to add levels
* How to add power-ups
* How to connect a backend
* How to deploy

---

# 59. FINAL QUALITY BAR

The finished application should feel like:

**A polished cybersecurity arcade game that employees actually want to play.**

It should NOT feel like:

**A PowerPoint quiz converted into a game.**

The player should constantly make gameplay decisions:

"Should I destroy this box?"

"Is there a power-up inside?"

"Is there a cybersecurity challenge?"

"Can I safely reach that area?"

"Should I risk fighting the enemy?"

"Can I answer quickly enough to increase my combo?"

This combination of gameplay and cybersecurity learning is the core of the experience.

---

# 60. FINAL DELIVERABLE

Produce a complete working:

# CYBERBOMB: SECURITY SHOWDOWN

with:

* Original arcade gameplay
* Grid maze
* Player
* Bombs
* Explosions
* Enemies
* Power-ups
* Question boxes
* Phishing detection
* Password strength detection
* Cybersecurity scenarios
* 100+ challenges
* Difficulty levels
* Scoring
* Speed bonuses
* Combo system
* Achievements
* 8+ levels
* Boss level
* Training Mode
* Challenge Mode
* Employee Awareness Mode
* Final awareness report
* Leaderboard
* Responsive UI
* Accessibility
* Audio controls
* Secure architecture
* Modular source code
* README

The final experience should be fun, fast, visually polished, educational, and suitable for a corporate cybersecurity awareness program.
