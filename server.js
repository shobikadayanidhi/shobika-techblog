const express = require('express');
const app = express();
const PORT = 3000;

// Sample blog post data (you can replace this with a database later)
const blogPosts = [
    { id: 1, title: 'Blog Post 1', content: 'This is the content of Blog Post 1.' },
    { id: 2, title: 'Blog Post 2', content: 'This is the content of Blog Post 2.' }
];

// Endpoint to get all blog posts
app.get('/api/posts', (req, res) => {
    res.json(blogPosts);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
