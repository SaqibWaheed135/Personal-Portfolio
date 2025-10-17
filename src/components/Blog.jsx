import React from 'react';
import content from '../content.json';

const Blog = () => {
  const { blog } = content;

  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">{blog.title}</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blog.posts.map((post, index) => (
            <li key={index} className="blog-post-item">
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>
                    <span className="dot"></span>
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p className="blog-text">{post.text}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Blog;
