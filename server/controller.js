module.exports = {
  getNotes: (req, res) => {
    req.app.get('db')
    .get_notes()
    .then( notes => {
        res.status(200).send(notes);
    })
  },

  addNote: (req, res) => {
    let { title, note } = req.body;
    if(!title || !note) {
        return res.sendStatus(400)
    }
    req.app.get('db')
    .add_note([title, note])
    .then( notes => {
      res.status(201).send(notes);
    })
  },

  deleteNote: (req, res) => {
    let { id } = req.params;
    req.app.get('db')
    .delete_note([id])
    .then( notes => {
      return res.send(notes);
    })
  },

  updateNote: (req, res) => {
    let { id } = req.params;
    let { title, note } = req.body;
    req.app.get('db')
    .update_note([title, note, id])
    .then( notes => {
      return res.send(notes);
    })
  }
};
