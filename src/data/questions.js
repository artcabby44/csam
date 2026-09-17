export const questions = [
    {
        id: 1,
        type: "physical",
        category: "Physical Security",
        difficulty: "easy",
        question: "What should you do?",
        content: `
            You are walking into the secure office building. A person carrying a large box of donuts is right behind you and asks you to hold the door open because their hands are full. They don't have a visible badge.
        `,
        options: ["Hold the door for them", "Ask to see their badge", "Take a donut and let them in"],
        correctAnswer: "Ask to see their badge",
        explanation: "This is a common tactic for tailgating. Even if it seems impolite, you must ensure everyone badging into a secure area is authorized.",
        cyberTip: "Politely ask them to badge in themselves to maintain physical security.",
        points: 100
    },
    {
        id: 2,
        type: "vishing",
        category: "Social Engineering",
        difficulty: "medium",
        question: "Is this call legitimate or a scam?",
        content: `
            <strong>Phone Call:</strong><br><br>
            "Hi, this is IT support. We're seeing unusual activity on your account. To verify it's you and stop the lockdown, I just need you to read me the 6-digit code we just sent to your authenticator app."
        `,
        options: ["LEGITIMATE", "SCAM"],
        correctAnswer: "SCAM",
        explanation: "IT support will never ask you to read an MFA code aloud over the phone. This is a vishing attempt to bypass your multi-factor authentication.",
        cyberTip: "Never share MFA codes over the phone, email, or chat.",
        points: 100
    },
    {
        id: 3,
        type: "updates",
        category: "Software Updates",
        difficulty: "easy",
        question: "What is the best action to take?",
        content: `
            A pop-up on your workstation says "Critical Security Update Available. Restart Required." You are currently working on a very important, non-urgent document.
        `,
        options: ["Ignore it forever", "Install it by the end of the day", "Click 'Remind Me Later' for a month"],
        correctAnswer: "Install it by the end of the day",
        explanation: "Critical security updates patch known vulnerabilities. You should save your work and restart as soon as it's convenient, preferably the same day.",
        cyberTip: "Delaying updates leaves your machine exposed to known exploits.",
        points: 100
    },
    {
        id: 4,
        type: "data",
        category: "Data Classification",
        difficulty: "medium",
        question: "Which sharing method is acceptable?",
        content: `
            You need to send an unencrypted spreadsheet containing the Social Security Numbers and home addresses of 50 new employees to the HR department.
        `,
        options: ["Email attachment", "Personal Dropbox link", "Secure internal file share (SFTP/Internal Drive)"],
        correctAnswer: "Secure internal file share (SFTP/Internal Drive)",
        explanation: "Highly sensitive PII should never be sent via unencrypted email or uploaded to personal, unsanctioned cloud storage.",
        cyberTip: "Always use approved, secure channels for transmitting confidential data.",
        points: 100
    },
    {
        id: 5,
        type: "passwords",
        category: "Password Management",
        difficulty: "medium",
        question: "What is the most secure way to store your work passwords?",
        content: `
            You have 15 different applications you log into daily for your job. Managing these passwords is becoming difficult.
        `,
        options: ["A sticky note under your keyboard", "A company-approved Password Manager", "An Excel file on your desktop named 'Passwords'"],
        correctAnswer: "A company-approved Password Manager",
        explanation: "A password manager securely encrypts your credentials and allows you to use strong, unique passwords for every site without having to memorize them.",
        cyberTip: "Only use the password manager explicitly approved by your IT/Security team.",
        points: 100
    }
];
