const Post = require('../models/post');

exports.getHomePage = (req, res, next) => {
    res.render('home');
}

// exports.writeNote = (req, res, next) => {
//     res.render('write');
// }

// exports.postNote = (req, res, next) => {
//     const note = new Note(req.body);
//     Console.console.log(req.body);
    
//     note.saveNote();
//     res.redirect('/');
// }

module.exports = (app) => {

  // CREATE
  app.post('/posts/new', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    const post = new Post(req.body);

    // SAVE INSTANCE OF POST MODEL TO DB
    post.save((err, post) => {
      // REDIRECT TO THE ROOT
      return res.redirect(`/`);
    })
  });

};
