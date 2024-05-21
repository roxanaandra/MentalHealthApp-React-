import React, { useEffect, useState } from 'react';

const MoodTracker = () => {
    const [message, setMessage] = useState('');
    const [showButtons, setShowButtons] = useState(true);
    const moodMessages = {
        sad: [
            "It's okay not to feel okay all the time. Every day brings new hope!",
            "Remember, even after the darkest nights, the sun rises again.",
            "You are stronger than you think. You are not alone in this fight.",
            "It's perfectly normal to feel sadness. Allow yourself to feel and heal.",
            "Every moment of sadness is a window to self-understanding. Have the courage to look through it."
        ],
        happy: [
            "Fantastic! It's wonderful to see you feeling happy!",
            "Continue to spread this positive energy around you.",
            "Your happiness shines and inspires those around you.",
            "Smile wide and let your happiness light up the world!",
            "Celebrate every moment of joy. You deserve all the happiness in the world."
        ],
        medium: [
            "Ordinary days are just as important. Every day is a new opportunity!",
            "Stability is a hidden blessing. Enjoy the balance.",
            "It's good to be in balance. Today is a day for reflection and appreciation.",
            "Embracing the calmness of today prepares you for the turbulence of tomorrow.",
            "Even in the most ordinary days, there's beauty and lessons to be learned."
        ]
    };

    const displayMessage = (newMood) => {
        const messages = moodMessages[newMood];
        if (messages && messages.length > 0) {
            const messageIndex = Math.floor(Math.random() * messages.length);
            const selectedMessage = messages[messageIndex]; 
            setMessage(selectedMessage);
            setShowButtons(false);

            const appData = JSON.parse(localStorage.getItem('journalAppData')) || {};
            appData.mood = {
                state: newMood,
                message: selectedMessage, 
                lastMessageTime: new Date().toISOString()
            };
            localStorage.setItem('journalAppData', JSON.stringify(appData));
        }
    };

    useEffect(() => {
        const appData = JSON.parse(localStorage.getItem('journalAppData'));
        if (appData && appData.mood && appData.mood.state && appData.mood.lastMessageTime) {
            
            if (appData.mood.message) {
                setMessage(appData.mood.message);
                setShowButtons(false);
            }

            const now = new Date();
            const lastMessageTime = new Date(appData.mood.lastMessageTime);
            const diff = now - lastMessageTime;

            if (diff < 4 * 3600 * 1000) {
                
                setTimeout(() => displayMessage(appData.mood.state), 4 * 3600 * 1000 - diff);
            } else {
                
                displayMessage(appData.mood.state);
            }
        }
    }, [displayMessage]);

    const handleClickMood = (newMood) => {
        setMood(newMood);
        displayMessage(newMood);
    };

    return (
        <div className='w-full h-2/5 flex justify-center items-center flex-col bg-red-200'>
            <h2 className='text-4xl font-semibold text-white'>Mood Tracker</h2>
            {showButtons && (
                <div className='flex gap-7 mt-6'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg' onClick={() => handleClickMood('sad')}>Sad</button>
                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg' onClick={() => handleClickMood('happy')}>Happy</button>
                    <button className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg' onClick={() => handleClickMood('medium')}>Medium</button>
                </div>
            )}
            {message && <p className='mt-7 text-2xl text-center text-white'>{message}</p>}
        </div>
    );
};

export default MoodTracker;
