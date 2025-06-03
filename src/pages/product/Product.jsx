import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../json/products';
import { useCart } from '../../context/Cartcontext';
import { MdAdd, MdRemove } from 'react-icons/md';
import Toast from '../../context/Toast';

const Product = () => {
    const { id } = useParams();
    const { addToCart } = useCart();

    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [toast, setToast] = useState({ isVisible: false, message: '' });

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
    }

    const handleAddToCart = () => {
        if (!selectedSize) {
            setToast({
                isVisible: true,
                message: 'Please select a size'
            });
            return;
        }

        const productToAdd = {
            ...product,
            selectedSize,
            quantity
        };

        addToCart(productToAdd);

        setToast({
            isVisible: true,
            message: `${product.title} added to cart!`
        });
    };

    const incrementQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prev => prev > 1 ? prev - 1 : 1);
    };

    return (
        <div className="min-h-screen bg-white">
            <Toast
                message={toast.message}
                isVisible={toast.isVisible}
                onClose={() => setToast({ isVisible: false, message: '' })}
            />

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div className="relative">
                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>


                    <div className="space-y-6">

                        <div>
                            <h1 className="text-2xl md:text-3xl font-medium text-gray-800 mb-4">
                                {product.title}
                            </h1>
                            <div className="flex items-center gap-3 mb-4">
                                {product.onSale && product.originalPrice ? (
                                    <>
                                        <span className="text-gray-400 line-through text-xl">${product.originalPrice.toFixed(2)}</span>
                                        <span className="text-red-500 font-semibold text-2xl">${product.price.toFixed(2)}</span>
                                    </>
                                ) : (
                                    <span className="text-gray-800 font-semibold text-2xl">${product.price.toFixed(2)}</span>
                                )}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {product.description}
                            </p>
                        </div>


                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-10 h-10 border-2 text-sm font-medium transition-colors ${selectedSize === size
                                                ? 'border-red-500 bg-red-500 text-white'
                                                : 'border-gray-300 text-gray-600 hover:border-gray-400'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>


                        <div className="flex items-center gap-4">

                            <div className="flex items-center border border-gray-300">
                                <button
                                    onClick={decrementQuantity}
                                    className="p-2 hover:bg-gray-100 transition-colors"
                                >
                                    <MdRemove size={16} />
                                </button>
                                <span className="px-4 py-2 min-w-[50px] text-center">{quantity}</span>
                                <button
                                    onClick={incrementQuantity}
                                    className="p-2 hover:bg-gray-100 transition-colors"
                                >
                                    <MdAdd size={16} />
                                </button>
                            </div>


                            <button
                                onClick={handleAddToCart}
                                className="bg-gray-800 text-white px-8 py-3 font-medium hover:bg-gray-900 transition-colors flex-1 max-w-xs"
                            >
                                ADD TO CART
                            </button>
                        </div>


                        <div className="text-sm text-gray-600 space-y-1">
                            <p>Brand: <span className="text-gray-800">{product.brand}</span></p>
                            <p>Categories: <span className="text-gray-800">{product.categories.join(', ')}</span></p>
                        </div>


                        <div className="border-t pt-6">

                            <span className="text-lg font-medium text-gray-800">Description</span>


                            <p className="text-sm text-black/40">{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;