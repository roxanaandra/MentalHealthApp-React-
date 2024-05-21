import React, { useState, useEffect } from 'react';
import JournalDetails from './JournalDetails'; 
import moment from 'moment'; 



const JournalEntry = () => {
    const [input, setInput] = useState('');
    const [entries, setEntries] = useState([]);
    const [formVisible, setFormVisible] = useState(false);
    const [imageVisible, setImageVisible] = useState(true);


    useEffect(() => {
        const appData = JSON.parse(localStorage.getItem('journalAppData'));
        if (appData && appData.entries) {
            setEntries(appData.entries);
        }
    }, []);

    const formatDate = (date) => {

        if (moment().diff(date, 'years') >= 1) {

            return moment(date).format('MMMM Do, YYYY [at] HH:mm');
        } else if (moment().diff(date, 'days') < 7) {

            return moment(date).format('dddd [at] HH:mm');
        } else {

            return moment(date).format('MMMM Do [at] HH:mm');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newEntry = {
            text: input,
            date: moment().format('YYYY-MM-DD HH:mm:ss'),
            friendlyDate: formatDate(moment().format('YYYY-MM-DD HH:mm:ss')),
        };

        
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEntry),
            });


            if (response.ok) {
                const jsonResponse = await response.json();
                console.log('Success:', jsonResponse);
            } else {
                console.error('Error with request:', response.statusText);
            }
        } catch (error) {
            console.error('Error during fetch:', error);
        }


        const newEntries = [newEntry, ...entries];
        localStorage.setItem('journalAppData', JSON.stringify({entries: newEntries}));
        setEntries(newEntries);
        setInput('');
        setFormVisible(false);
        setImageVisible(true);
    };


    const handleClickImage = () => {
        setFormVisible(true);
        setImageVisible(false);
    };

    return (
        <div className='flex justify-center items-center flex-col w-full min-h-screen bg-blue-200'>
            <h2 className='text-4xl font-bold'>Your online journal</h2>
            <p className='text-xl font-medium my-3'>Feel free to open your mind, heart, and soul.</p>
            {imageVisible && (
                <button onClick={handleClickImage} className='bg-white rounded-full p-2 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    <svg width="22" height="22" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261
                 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </button>
            )}

            {formVisible && (
                <form className='flex justify-center items-center flex-col' onSubmit={handleSubmit}>
                    <textarea
                        className='w-96 h-96 p-4 text-white text-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50 transition-all duration-300 mb-5 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-5'
                        id="input_textarea"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Write your thoughts here...'
                    ></textarea>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transform transition duration-500 hover:scale-105' type="submit">Save</button>
                </form>
            )}
            <JournalDetails entries={entries} setEntries={setEntries} />
        </div>
    );
};

export default JournalEntry;
