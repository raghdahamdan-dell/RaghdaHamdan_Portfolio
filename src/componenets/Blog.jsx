import { useState } from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../constants';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;
  
  // Calculate total pages
  const totalPages = Math.ceil(BLOG_POSTS.length / postsPerPage);
  
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = BLOG_POSTS.slice(indexOfFirstPost, indexOfLastPost);
  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <div id="blogs" className="border-b border-neutral-900 pb-16 pt-16 -mt-16">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Blog
      </motion.h1>
      
      <div className="max-w-5xl mx-auto">
        {currentPosts.map((post) => (
          <motion.div
            key={post.id}
            className="mb-12 bg-neutral-900 dark:bg-dark-accent rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="h-48 w-full object-cover md:h-full"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex items-center text-sm mb-2">
                  <span className="text-purple-400">{post.date}</span>
                  <span className="mx-2">•</span>
                  <div className="flex space-x-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-neutral-800 dark:bg-dark-primary px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-neutral-400 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <button className="text-purple-400 hover:text-purple-300 transition-colors">
                  <a href={post.link}>Read More →</a>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  currentPage === index + 1
                    ? 'bg-purple-600 text-white'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
