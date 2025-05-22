import React from 'react';
import { blog } from "@/images";
import Image from 'next/image';

interface BlogPostProps {
  title: string;
  imageUrl: string;
  excerpt: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, imageUrl, excerpt }) => {
  return (
    <article className="flex gap-6 mb-8 max-w-4xl mx-auto bg-white rounded-md shadow-md overflow-hidden">
        <Image
          src={blog}
          alt="Under Construction"        
          className="w-40 object-cover"
          loading="lazy"
        />

      <div className="p-4 flex flex-col justify-center">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{excerpt}</p>
      </div>
    </article>
  );
};

export default BlogPost;
