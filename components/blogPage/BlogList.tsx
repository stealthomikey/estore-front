import React from 'react';
import BlogPost from './BlogPost';

const blogPosts = [
  {
    title: 'Welcome to Our Blog',
    imageUrl: 'https://via.placeholder.com/160x120?text=Blog+Image+1',
    excerpt:
      'This site is currently under development. Stay tuned for articles about our products, tips, and more!',
  },
  // You can add more posts here later
];

const BlogList: React.FC = () => {
  return (
    <section className="py-8">
      {blogPosts.map((post, idx) => (
        <BlogPost
          key={idx}
          title={post.title}
          imageUrl={post.imageUrl}
          excerpt={post.excerpt}
        />
      ))}
    </section>
  );
};

export default BlogList;
