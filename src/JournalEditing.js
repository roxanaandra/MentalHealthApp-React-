import React, { useState } from 'react';
import moment from 'moment';
const JournalEditing = ({ entry, index, entries, setEntries, setIsEditing, setIsDeleteVisible }) => {
    const [editedText, setEditedText] = useState(entry.text);

    const handleSave = () => {
        const now = moment();
        const updatedDate = now.format('YYYY-MM-DD HH:mm:ss');
        const updatedFriendlyDate = formatDate(now);

        const updatedEntry = {
            ...entry,
            text: editedText,
            date: updatedDate,
            friendlyDate: updatedFriendlyDate,
        };

        const updatedEntries = entries.map((e, i) => i === index ? updatedEntry : e);
        const appData = { entries: updatedEntries };
        localStorage.setItem('journalAppData', JSON.stringify(appData));

        setEntries(updatedEntries);
        setIsEditing(false);
        setIsDeleteVisible(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setIsDeleteVisible(true);
    };

    
    const formatDate = (date) => {
        if (moment().diff(date, 'years') >= 1) {
            return date.format('MMMM Do, YYYY [at] HH:mm');
        } else if (moment().diff(date, 'days') < 7) {
            return date.format('dddd [at] HH:mm');
        } else {
            return date.format('MMMM Do [at] HH:mm');
        }
    };

    return (
        <div className='flex items-center flex-col'>
            <textarea
                
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
            />
            <div className='mt-2.5'>
                <button className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-sm text-white font-semibold py-1 px-3 rounded-full shadow transform transition duration-300 hover:scale-105 ml-2' onClick={handleSave}>Save</button>
                <button className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-sm text-white font-semibold py-1 px-3 rounded-full shadow transform transition duration-300 hover:scale-105 ml-2' onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default JournalEditing;
