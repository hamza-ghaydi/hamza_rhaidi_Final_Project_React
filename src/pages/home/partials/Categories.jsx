import React from 'react';

const Categories = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row gap-5 p-5 lg:p-10 overflow-hidden max-w-7xl mx-auto'>
            <div className="w-full lg:w-1/3 h-[30vh] bg-[url('/src/assets/images/cards4.webp')] bg-cover bg-no-repeat bg-center flex items-end justify-center">
                <h2 className='text-xl text-black bg-white px-10 py-1 mb-5'>SUNGLASSES</h2>
            </div>

            <div className="w-full lg:w-1/3 h-[30vh] bg-[url('/src/assets/images/cards2.webp')] bg-cover bg-no-repeat bg-center flex items-end justify-center">
                <h2 className='text-xl text-black bg-white px-10 py-1 mb-5'>WATCHES</h2>
            </div>

            <div className="w-full lg:w-1/3 h-[30vh] bg-[url('/src/assets/images/cards3.webp')] bg-cover bg-no-repeat bg-center flex items-end justify-center">
                <h2 className='text-xl text-black bg-white px-10 py-1 mb-5'>BAGS</h2>
            </div>
        </div>
    );
};

export default Categories;