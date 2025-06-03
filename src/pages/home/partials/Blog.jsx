import React from 'react';
import { posts } from '../../../json/posts';
import images from '../../../constants/images';

const Blog = () => {
    return (
        <div className='lg:p-10 p-5'>
            <div className='items-center justify-center lg:flex gap-10'>
                {posts.map((post) => (
                    <div key={post.id}>
                        {post.image && (
                             <img 
                             src={post.image}
                             className='w-full h-70 object-cover' alt="" />
                        )}
                        <div className='py-3 space-y-3'>
                        <h2 className='font-semibold text-md text-black/80'>{post.title}</h2>
                        <p className='text-black/45 ' >by <span className='text-black/60'>{post.author}</span> on <span className='text-black/60'>{post.date}</span> </p>
                        <p className='text-black/35'>{post.excerpt.slice(0,200)}...</p>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
};

export default Blog;