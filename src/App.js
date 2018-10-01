import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import AddNote from './components/AddNote/AddNote';
import NoteContainer from './components/NoteContainer/NoteContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  addNote = (note) => {
    axios.post('/api/note', note)
    .then( notes => console.log(notes) || this.setState({notes: notes.data}))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Note Ninja</h1>
        </header>
        <AddNote noteAdder={this.addNote} />
        <NoteContainer notes={ this.state.notes } />
        
      </div>
    );
  }
}

export default App;
