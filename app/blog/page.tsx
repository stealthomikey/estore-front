import React from 'react';
import Container from '@/components/Container';
import BlogList from '@/components/blogPage/BlogList';

const BlogPage: React.FC = () => {
  return (
    <Container className="py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-700">Blog</h1>
      <BlogList />
    </Container>
  );
};

export default BlogPage;
