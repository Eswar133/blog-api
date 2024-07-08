const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const auth = require('../middleware/auth');

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'username email');
    res.status(200).json(blogs);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get single blog post by ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('author', 'username email');
    if (!blog) return res.status(404).json({ message: 'Blog post not found' });
    res.status(200).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Create a new blog post
router.post('/', auth, async (req, res) => {
  const { title, content, images } = req.body;
  try {
    const blog = new Blog({ title, content, images, author: req.user._id });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an existing blog post
router.put('/:id', auth, async (req, res) => {
  const { title, content, images } = req.body;
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog post not found' });
    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.images = images || blog.images;
    await blog.save();
    res.status(200).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an existing blog post
router.delete('/:id', auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog post not found' });
    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    await blog.remove();
    res.status(200).json({ message: 'Blog post deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get filtered list of posts by title or author
router.get('/filter', async (req, res) => {
  const { title, author } = req.query;
  const filter = {};
  if (title) filter.title = new RegExp(title, 'i');
  if (author) {
    const authorUser = await User.findOne({ username: new RegExp(author, 'i') });
    if (authorUser) filter.author = authorUser._id;
  }
  try {
    const blogs = await Blog.find(filter).populate('author', 'username email');
    res.status(200).json(blogs);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
