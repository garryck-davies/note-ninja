import React from 'react';
import './NoteContainer.css';

import Note from '../Note/Note'

export default function NoteContainer(props) {
    
    let displayNotes = props.notesPizza.map( (note, index) => {
        return (
           <Note note={note} />
        )
    })

    return (
        <section className='notecontainer-container'>
            {displayNotes}
        </section>
    )
}
