const notes = [];
id = 0;

module.exports = {
  getNotes: (req, res) => {
    res.status(200).send(notes);
  },

  addNote: (req, res) => {
    let { title, note } = req.body;
    console.log(req.body);
    if(!title || !note) {
        return res.status(400).send('Whathta')
    }
    let date = new Date().toString();
    let newNote = { id, title, note, date };
    notes.push(newNote);
    id++;
    res.status(201).send(notes);
  },

  deleteNote: (req, res) => {
      let { id } = req.params;
      notes = notes.filter( note => note.id !== +id);
      res.send(notes);
  }
};
