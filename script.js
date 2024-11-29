// script.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/posts')
        .then(response => response.json())
        .then(posts => {
            const blogPostsContainer = document.getElementById('blogPosts');
            
            posts.forEach(post => {
                // Create a blog post card
                const postElement = document.createElement('div');
                postElement.classList.add('col-md-4', 'mb-4');
                postElement.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.content.slice(0, 100)}...</p>
                            <a href="#" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                `;
                
                // Append the blog post card to the container
                // @ts-ignore
                blogPostsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.log('Error fetching blog posts:', error));
});
