import React from 'react';

const Infos = () => {
    return (
        <div className='px-10 py-5 text-center space-y-10'>
            <h2 className='text-3xl font-bold'>@ FOLLOW US ON INSTAGRAM</h2>

            <div className='flex lg:flex-row flex-col items-center justify-around gap-10 lg:p-10'>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-xl'>Free Delivery Worldwide</h3>
                    <p className='text-black/40'>Mirum est notare quam littera gothica</p>
                </div>
                <div className=' flex flex-col  gap-1 lg:border-x-2 lg:px-20 border-black/10'>
                    <h3 className='text-xl'>Free Delivery Worldwide</h3>
                    <p className='text-black/40'>Mirum est notare quam littera gothica</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-xl'>Free Delivery Worldwide</h3>
                    <p className='text-black/40'>Mirum est notare quam littera gothica</p>
                </div>
            </div>
        </div>
    );
};

export default Infos;