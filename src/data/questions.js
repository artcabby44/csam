export const questions = [
    {
        id: 1,
        type: "phishing",
        category: "Phishing",
        difficulty: "easy",
        question: "Is this message phishing or safe?",
        content: `
            <strong>From:</strong> security-alert@micros0ft.example<br>
            <strong>Subject:</strong> Urgent Account Verification<br><br>
            "Your account will be permanently disabled within 30 minutes. Click here to verify your password."
        `,
        options: ["PHISHING", "SAFE"],
        correctAnswer: "PHISHING",
        explanation: "The sender domain uses a zero instead of 'o' (micros0ft), creates false urgency, and asks for password verification.",
        cyberTip: "Always inspect the sender domain carefully for misspellings.",
        points: 100
    },
    {
        id: 2,
        type: "phishing",
        category: "Phishing",
        difficulty: "medium",
        question: "Is this message phishing or safe?",
        content: `
            <strong>From:</strong> it-helpdesk@company.example<br>
            <strong>Subject:</strong> Password Expiration Notice<br><br>
            "Your password will expire in 7 days. Access the normal company password portal using your usual bookmark to update it."
        `,
        options: ["PHISHING", "SAFE"],
        correctAnswer: "SAFE",
        explanation: "The message does not include a suspicious link and directs you to use your existing trusted bookmark.",
        cyberTip: "Legitimate IT requests usually tell you to go to known portals rather than providing direct links.",
        points: 100
    },
    {
        id: 3,
        type: "password",
        category: "Passwords",
        difficulty: "easy",
        question: "STRONG OR WEAK?",
        content: `
            <strong>Password:</strong><br>
            <span style="font-size: 24px; color: #fff;">Summer2026!</span>
        `,
        options: ["STRONG", "WEAK"],
        correctAnswer: "WEAK",
        explanation: "Adding a year and a symbol to a common dictionary word is highly predictable.",
        cyberTip: "Avoid using seasons, years, or company names in your passwords.",
        points: 100
    },
    {
        id: 4,
        type: "password",
        category: "Passwords",
        difficulty: "medium",
        question: "STRONG OR WEAK?",
        content: `
            <strong>Password:</strong><br>
            <span style="font-size: 24px; color: #fff;">correct-horse-battery-mountain</span>
        `,
        options: ["STRONG", "WEAK"],
        correctAnswer: "STRONG",
        explanation: "This is a long passphrase using multiple unrelated words, making it very hard to guess but relatively easy to remember.",
        cyberTip: "Length is often more important than complexity.",
        points: 100
    },
    {
        id: 5,
        type: "mfa",
        category: "MFA",
        difficulty: "medium",
        question: "What should you do?",
        content: `
            You receive three unexpected Multi-Factor Authentication (MFA) prompts on your desktop authenticator app while working on a local spreadsheet.
        `,
        options: ["Approve one to make it stop", "Ignore them completely", "Deny and report the activity"],
        correctAnswer: "Deny and report the activity to GSC Infosec or GSOC",
        explanation: "Unexpected MFA prompts indicate someone else has your password and is trying to log in.",
        cyberTip: "Never approve an MFA prompt you didn't initiate yourself.",
        points: 100
    }
];
