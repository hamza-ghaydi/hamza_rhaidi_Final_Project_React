import React from 'react';

const Auth = () => {
    return (
        <div className='lg:h-[70vh] lg:p-10 lg:flex space-y-5  items-center justify-center gap-5'>
            <div className='lg:w-[40%] lg:border border-black/20 px-5 py-3 space-y-4'>
                <h2 className='text-3xl font-semibold'>New Customer</h2>
                <span className='text-black/60 text-xl'>Register Account</span>
                <p className='text-black/45'>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made</p>
                <button className='bg-black text-white px-7 py-2'>CONTIMUE</button>
            </div>

            <div className='lg:w-[40%] lg:border border-black/20 px-5 py-3 space-y-4'>
                <h2 className='text-3xl font-semibold'>Returning Customer</h2>
                <span className='text-black/60 text-xl'>I am a returning customer</span>
                <form action="" className='flex flex-col w-full space-y-2'>
                    <label htmlFor="" >Email</label>
                    <input type="email" placeholder='Email' className='border px-1 py-2 focus:outline' />

                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Password' className='border px-1 py-2 focus:outline'/>

                    <a href="" className='text-black/60'>Forgot your password?</a>

                    <button  className='bg-black text-white px-7 py-2'>SIGN IN</button>

                </form>
            </div>

        </div>
    );
};

export default Auth;