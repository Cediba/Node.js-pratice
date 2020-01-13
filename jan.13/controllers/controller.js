
//---handling the response---
const Note = require('../models/note');

exports.getHomePage = (req, res, next) => {
    res.render('home');
}

exports.writeNote = (req, res, next) => {
    res.render('write');
}

exports.postNote = (req, res, next) => {
    const note = new Note(req.body.author, req.body.title, req.body.content);
    console.log(note);
    note.saveNote();
    res.redirect('/');
}

exports.readNotes = (req, res, next) => {
    Note.getAll((notes) => {
        res.render('read', {notes: notes});
    });
}