const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'home.html'));
});

router.get('/note-page', (req, res, next)=> {
    res.sendFile(path.join(__dirname, '../views', 'form.html'));
});

router.post('/send-message', (req, res, next) => {
    fs.writeFile('note.txt', req.body.note, () => {
        res.redirect('/');
    });

router.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', '404.html'));
});

});

module.exports = router;
