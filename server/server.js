require('dotenv').config();
const express = require('express');
const ctrl = require('./controller');
const massive = require('massive');
const app = express();
const port = 4045;

app.use(express.json());

massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set('db', db);
    console.log('DB Connected');
})

app.get('/api/note', ctrl.getNotes);
app.post('/api/note/', ctrl.addNote);
app.delete('/api/note/:id', ctrl.deleteNote);
app.put('/api/note/:id', ctrl.updateNote);

app.listen(port, () => console.log(`Hard to port ${port}`))