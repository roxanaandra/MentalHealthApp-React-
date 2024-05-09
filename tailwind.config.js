/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/ProjectTest.js", // Path to ProjectTest.js
    "./src/App.js", 
    "./src/Campaing.js",
    "./src/LearnPage.js",
    "./src/JournalEntry.js",
    "./src/JounalDetails.js",
    "./src/JournalEntryDisplay.js",
    "./src/JournalEditing.js",
    "./src/MoodTracker.js",
    "./src/News.js",
    "./src/Header.js",
    "./src/QuizGame.js",
    // You can add more specific file paths here if needed
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1309px',
      },
    },
  },
  plugins: [],
}
