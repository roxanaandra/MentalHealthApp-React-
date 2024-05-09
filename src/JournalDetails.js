import React from 'react';
import JounalEntryDisplay from './JournalEntryDisplay';

const JournalDetails = ({entries, setEntries}) => {
    return (
        <div className=''>
            {entries.map((entry, index) => (
                <div key={index} className='' style={{ marginBottom: '20px' }}>
                <JounalEntryDisplay  index={index} entry={entry} entries={entries} setEntries={setEntries}/>
                </div>
            ))}
        </div>
    )
}


export default JournalDetails;