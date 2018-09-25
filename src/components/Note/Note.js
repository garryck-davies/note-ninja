import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            titleInput: this.props.note.title,
            noteInput: this.props.note.note
        }
    }

    toggleEditing = () => {
        this.setState({
            editing: !this.state.editing
        })
    }

    handleTitleInput = (e) => {
        this.setState({
            titleInput: e.target.value
        })
    }

    handleNoteInput = (e) => {
        this.setState({
            noteInput: e.target.value
        })
    }

  
    render() {
    return (
      <div className="notecontainer-note" key={this.props.note.id}>
       {this.state.editing
        ? <input 
            value={this.state.titleInput} 
            onChange={this.handleTitleInput}/>
        : <h4>{this.props.note.title}</h4>
        }

        {this.state.editing
        ? <input 
            value={this.state.noteInput} 
            onChange={this.handleNoteInput}/>
        : <p>{this.props.note.note}</p>
        }
        {
            this.state.editing
            ? <button onClick={this.submitEdit}>Submit</button>
            : <button onClick={this.toggleEditing}>Edit</button>
        }
        <p className="notecontainer-date">{this.props.note.date}</p>
      </div>
    );
  }
}
