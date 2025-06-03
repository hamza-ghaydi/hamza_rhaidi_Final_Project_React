import React from 'react';
import { posts } from '../../json/posts';

const Blog = () => {
    return (
        <div>

            <div
                className="w-full h-[30vh] bg-[url('/src/assets/images/banner.webp')] flex justify-center items-center">
                <h1 className='text-4xl font-bold text-amber-50'>NEWS</h1>
            </div>


            <div className='flex lg:px-[10vw] '>
                <div className='lg:p-10 p-5 w-[70vw]'>
                    <div>
                        {posts.map((post) => (
                            <div key={post.id} className='py-10'>
                                {post.image && (
                                    <img
                                        src={post.image}
                                        className='w-full h-100 object-cover rounded-2xl' alt="" />
                                )}
                                <div className='py-3 space-y-3'>
                                    <h2 className='font-semibold text-md text-black/80'>{post.title}</h2>
                                    <p className='text-black/45 ' >by <span className='text-black/60'>{post.author}</span> on <span className='text-black/60'>{post.date}</span> </p>
                                    <p className='text-black/35'>{post.excerpt.slice(0, 200)}...</p>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>



                <div className='w-[30vw] h-50 pt-20'>
                        <h2 className='text-2xl font-semibold'>Featured products:</h2>
                </div>
            </div>
        </div>
    );
};

export default Blog;