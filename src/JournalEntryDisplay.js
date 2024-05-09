import React, {useState} from 'react';
import JournalEditing from './JournalEditing';


const JounalEntryDisplay = ({entries, index, entry, setEntries}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleteVisible, setIsDeleteVisible] = useState(true);
    const [isTextExpanded, setIsTextExpanded] = useState(false);
    

    const handleDeleteClick = () => {
        const newEntries = entries.filter((_, i) => i !== index);
        setEntries(newEntries);
        const appData = JSON.parse(localStorage.getItem('journalAppData')) || {};
        appData.entries = newEntries;
        localStorage.setItem('journalAppData', JSON.stringify(appData));
    };
    

    const handleEditClick = () => {
        setIsEditing(true);
        setIsDeleteVisible(false);
    }

    const shortText = entry.text.length > 100 && !isTextExpanded
    ? entry.text.substring(0, 100) + "..."
    : entry.text;

    return(
        <>
        <div className='mt-2.5  relative bg-white bg-opacity-50 border border-gray-200 rounded-lg shadow-lg p-4'>

            <div className='my-5'>
                <div className='h-auto'>{shortText}</div>
                {entry.text.length > 100 && (
                    <button className='text-blue-500 hover:text-blue-700 cursor-pointer transition-colors ease-in-out duration-150' onClick={() => setIsTextExpanded(!isTextExpanded)}>
                        {isTextExpanded ? "View Less" : "View More"}
                    </button>
                )}
                <div>{entry.friendlyDate}</div>
            </div>

            <div className='flex items-center gap-y-1.5 mt-2.5'>

                {!isEditing && (
                    <button className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-sm text-white font-semibold py-1 px-3 rounded-full shadow transform transition duration-300 hover:scale-105' onClick={handleEditClick}>Edit</button>
                )}

                {isEditing && (
                    <JournalEditing entries={entries} index={index} entry={entry} setEntries={setEntries} setIsEditing={setIsEditing} setIsDeleteVisible={setIsDeleteVisible}/>
                )}

                {isDeleteVisible && (
                <button className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-sm text-white font-semibold py-1 px-3 rounded-full shadow transform transition duration-300 hover:scale-105 ml-2' onClick={handleDeleteClick}>Delete</button>)}
            </div>


        </div>
        </>
    )
}

export default JounalEntryDisplay;