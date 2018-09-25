import React from 'react';
import './AddNote.css'

export default class AddNote extends React.Component {
    constructor() {
        super();
        this.state = {
            titleInput: '',
            noteInput: ''
        }
    }

    handleTextAreaChange = (value) => {
        this.setState({
            noteInput: value
        })
    }

    handleTitleInputChange = (value) => {
        this.setState({
            titleInput: value
        })
    }

    addNewNote = () => {
        let newNote = {
            title: this.state.titleInput,
            note: this.state.noteInput
        }
        this.props.noteAdder(newNote)
    }

    render() {
        return (
            <div className='addnote-container'>
                <input type='text' onChange={ (e) => this.handleTitleInputChange(e.target.value) }/>
                <textarea onChange={ (e) => this.handleTextAreaChange(e.target.value)} className='addnote-textarea'/>
                <button onClick={this.addNewNote}>Add Note</button>
            </div>
        )
    }
}