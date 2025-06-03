import { useState } from 'react';
import { products } from '../../../json/products';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useCart } from '../../../context/Cartcontext';
import Toast from '../../../context/Toast';
import { useNavigate } from 'react-router-dom';

const OurProducts = () => {
    const [toast, setToast] = useState({ isVisible: false, message: '' });
    const { addToCart } = useCart();
    const navigate = useNavigate()


    const getFilteredProducts = () => {

        return products.slice(0, 8); 
    };

    const handleAddToCart = (product) => {
        const productToAdd = {
            ...product,
            selectedSize: product.sizes[0], // Default to first available size
            quantity: 1
        };
        addToCart(productToAdd);
        setToast({
            isVisible: true,
            message: `${product.title} added to cart!`
        });
    };

    const filteredProducts = getFilteredProducts();

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <Toast
                message={toast.message}
                isVisible={toast.isVisible}
                onClose={() => setToast({ isVisible: false, message: '' })}
            />
            <div className='text-center mb-12'>
                <h2 className='text-4xl md:text-5xl font-semibold text-gray-800 mb-8'>OUR PRODUCTS</h2>


            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="group relative bg-white">
                       
                        <div className="relative overflow-hidden bg-gray-100 aspect-square">
                            
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                                />
                            

                           
                            <button
                                onClick={() => handleAddToCart(product)}
                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 hover:bg-gray-50"
                            >
                                <MdOutlineShoppingCart size={16} />
                                Add to Cart
                            </button>
                        </div>

                        
                        <div className="p-4 text-center">
                            <h3 onClick={() => { navigate(`/product/${product.id}`) }} className="text-sm md:text-base font-medium text-gray-800 mb-2 line-clamp-2 cursor-pointer">
                                {product.title}
                            </h3>
                            <div className="flex justify-center items-center gap-2">
                                {product.onSale && product.originalPrice ? (
                                    <>
                                        <span className="text-gray-400 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
                                        <span className="text-red-500 font-semibold">${product.price.toFixed(2)}</span>
                                    </>
                                ) : (
                                    <span className="text-gray-800 font-semibold">${product.price.toFixed(2)}</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurProducts;