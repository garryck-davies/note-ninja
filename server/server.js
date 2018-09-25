const express = require('express');
const ctrl = require('./controller');
const app = express();
const port = 4045;

app.use(express.json());

app.get('/api/note', ctrl.getNotes)
app.post('/api/note/', ctrl.addNote);

app.listen(port, () => console.log(`Hard to port ${port}`))