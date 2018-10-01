import React from 'react';
import './NoteContainer.css';

import Note from '../Note/Note'

export default function NoteContainer(props) {
    
    let displayNotes = props.notes.map( (note) => {
        return (
           <Note key={note.id} note={note} />
        )
    })

    return (
        <section className='notecontainer-container'>
            {displayNotes}
        </section>
    )
}
