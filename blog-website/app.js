const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./models/post');

const app = express();

const mongoDBUrl = 'mongodb://localhost:27017/blogDB';
mongoose.connect(mongoDBUrl, {})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Failed to connect to MongoDB', err));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    console.log('Fetched posts:', posts);  // Debugging log
    res.render('index', { posts: posts });
  } catch (err) {
    console.log('Error fetching posts:', err);
    res.status(500).send('Error fetching posts');
  }
});

app.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    console.log('Fetched post:', post);  // Debugging log
    res.render('post', { post: post });
  } catch (err) {
    console.log('Error fetching post:', err);
    res.status(500).send('Error fetching post');
  }
});

app.get('/compose', (req, res) => {
  res.render('new-post');
});

app.post('/compose', async (req, res) => {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postContent
  });
  try {
    await post.save();
    console.log('Saved post:', post);  // Debugging log
    res.redirect('/');
  } catch (err) {
    console.log('Error saving post:', err);
    res.status(500).send('Error saving post');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
