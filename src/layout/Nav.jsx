import React, { useState } from 'react';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterestSquare, FaTwitter } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import images from '../constants/images';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative">

            <div className='w-full py-5 items-center justify-between px-10 hidden md:flex'>
                <div className='flex items-center gap-3'>
                    <FaFacebookF size={20} className='text-black/35' />
                    <FaTwitter size={20} className='text-black/35' />
                    <FaPinterestSquare size={20} className='text-black/35' />
                    <FaGooglePlusG size={20} className='text-black/35' />
                    <FaInstagram size={20} className='text-black/35' />
                </div>

                <div>
                    <img src={images.logo} alt="fashe logo" />
                </div>

                <div className='flex items-center gap-5'>
                    <a href="mailto:hamzaghayd01@gmail.com">hamzaghayd01@gmail.com</a>
                    <CgProfile onClick={() => { navigate("/auth") }} size={25} className='text-black/35 cursor-pointer' />
                    <MdOutlineShoppingCart size={25} className='text-black/35' />
                </div>
            </div>


            <div className='w-full items-center justify-center py-5 hidden md:flex'>
                <ul className='flex items-center gap-10 text-black/50 cursor-pointer'>
                    <li onClick={() => { navigate("/") }} className='focus:text-red-500 hover:text-red-500'>Home</li>
                    <li onClick={() => { navigate("/shop") }} className='focus:text-red-500 hover:text-red-500'>Shop</li>
                    <li onClick={() => { navigate("/blog") }} className='focus:text-red-500 hover:text-red-500'>Blog</li>
                    <li onClick={() => { navigate("/about") }} className='focus:text-red-500 hover:text-red-500'>About</li>
                    <li onClick={() => { navigate("/contact") }} className='focus:text-red-500 hover:text-red-500'>Contact</li>
                </ul>
            </div>


            <div className="md:hidden">
                <div className='w-full py-4 flex items-center justify-between px-4 bg-white border-b'>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-gray-800 focus:outline-none"
                        >
                            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                        <img src={images.logo} alt="fashe logo" className="h-8" />
                    </div>

                    <div className='flex items-center gap-3'>
                        <CgProfile size={20} className='text-black/35' />
                        <MdOutlineShoppingCart size={20} className='text-black/35' />
                    </div>
                </div>


            </div>


            {isMenuOpen && (
                <div className="md:hidden  w-full">
                    <ul className="space-y-0 bg-red-500">
                        <li className="block py-4 px-4 text-white hover:bg-red-600 border-b border-red-400/30 transition-colors"
                            onClick={() => { navigate("/"), setIsMenuOpen(false) }}
                        >
                            Home
                        </li>
                        <li className="block py-4 px-4 text-white hover:bg-red-600 border-b border-red-400/30 transition-colors"
                            onClick={() => { navigate("/shop"), setIsMenuOpen(false) }}
                        >
                            Shop
                        </li>
                        <li className="block py-4 px-4 text-white hover:bg-red-600 border-b border-red-400/30 transition-colors"
                            onClick={() => { navigate("/blog"), setIsMenuOpen(false) }}
                        >
                            Blog
                        </li>
                        <li className="block py-4 px-4 text-white hover:bg-red-600 border-b border-red-400/30 transition-colors"
                            onClick={() => { navigate("/about"), setIsMenuOpen(false) }}
                        >
                            About
                        </li>
                        <li className="block py-4 px-4 text-white hover:bg-red-600 border-b border-red-400/30 transition-colors"
                            onClick={() => { navigate("/contact"), setIsMenuOpen(false) }}
                        >
                            Contact
                        </li>
                    </ul>


                    <div className="py-3 px-4 bg-[#F5F5F5] text-center">
                        <div className="text-black text-sm mb-2">Free all everything</div>
                        <a href="mailto:hamzaghayd01@gmail.com" className="text-black/50 text-sm">hamzaghayd01@gmail.com</a>
                    </div>


                    <div className="py-3 px-4 bg-[#F5F5F5] flex justify-center gap-4">
                        <FaFacebookF size={16} className='text-black/60 ' />
                        <FaTwitter size={16} className='text-black/60 ' />
                        <FaPinterestSquare size={16} className='text-black/60 ' />
                        <FaGooglePlusG size={16} className='text-black/60 ' />
                        <FaInstagram size={16} className='text-black/60 ' />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Nav;