const database = require('../util/database');
const mongodb = require('mongodb');

// const PostSchema = new Schema({
//   title: { type: String, required: true },
//   url: { type: String, required: true },
//   summary: { type: String, required: true }
// });
class Post {
    constructor(author, title, picture, content) {
        this.author = author;
        this.title = title;
        this.date = new Date();
        this.content = content;
    }
}

module.exports = Post;