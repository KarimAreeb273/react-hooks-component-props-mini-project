import React from 'react';
import Article from './Article';

function ArticleList({ posts }) {
    const post = posts.map((blog) => (
        <Article
        key={blog.id}
        title={blog.title}
        date={blog.date}
        preview={blog.preview}
        minutes={blog.minutes}
        />
    ))
    return (
        <main>
            {post}
        </main>
    )
}

export default ArticleList;