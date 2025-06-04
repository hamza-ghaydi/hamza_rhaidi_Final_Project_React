import { useState } from 'react';
import { products } from '../../json/products';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useCart } from '../../context/Cartcontext';
import { Link } from 'react-router-dom';
import Toast from '../../context/Toast';

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState('');
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [toast, setToast] = useState({ isVisible: false, message: '' });
    const { addToCart } = useCart();


    const getFilteredProducts = () => {
        let filtered = [...products];

        
        if (selectedCategory) {
            if (selectedCategory === 'Men') {
                filtered = filtered.filter(product =>
                    product.categories.some(cat => cat.toLowerCase().includes('men'))
                );
            } else if (selectedCategory === 'Women') {
                filtered = filtered.filter(product =>
                    product.categories.some(cat => cat.toLowerCase().includes('women'))
                );
            }else if (selectedCategory === 'Best Seller') {
                filtered = filtered.filter(product =>
                    product.categories.some(cat => cat.toLowerCase().includes('Best Seller'))
                );
            }
        }

        
        if (selectedPriceRange) {
            if (selectedPriceRange === '0-20') {
                filtered = filtered.filter(product => product.price >= 0 && product.price <= 20);
            } else if (selectedPriceRange === '20-40') {
                filtered = filtered.filter(product => product.price > 20 && product.price <= 40);
            }
        }

        
        if (selectedSizes.length > 0) {
            filtered = filtered.filter(product =>
                product.sizes.some(size => selectedSizes.includes(size))
            );
        }

        return filtered;
    };

    const handleAddToCart = (product) => {
        const productToAdd = {
            ...product,
            selectedSize: product.sizes[0],
            quantity: 1
        };
        console.log('Adding to cart:', productToAdd);
        addToCart(productToAdd);
        console.log('Cart updated');
        setToast({
            isVisible: true,
            message: `${product.title} added to cart!`
        });
    };

    const handleSizeToggle = (size) => {
        setSelectedSizes(prev =>
            prev.includes(size)
                ? prev.filter(s => s !== size)
                : [...prev, size]
        );
    };

    const filteredProducts = getFilteredProducts();

    return (
        <div className="min-h-screen bg-gray-50">
            <Toast
                message={toast.message}
                isVisible={toast.isVisible}
                onClose={() => setToast({ isVisible: false, message: '' })}
            />

            
            <div className="w-full h-[30vh] bg-[url('/src/assets/images/banner.webp')] bg-cover bg-center flex justify-center items-center">
                <h1 className='text-4xl font-bold text-white'>SHOP</h1>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex gap-8">
                    
                    <div className="w-64 lg:flex flex-col hidden">
                        
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
                            <div className="space-y-2">
                                {['Best Seller', 'Men', 'Women'].map((category) => (
                                    <label key={category} className="flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            name="category"
                                            value={category}
                                            checked={selectedCategory === category}
                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                            className="sr-only"
                                        />
                                        <span className={`text-sm ${
                                            selectedCategory === category
                                                ? 'text-red-500 font-medium'
                                                : 'text-gray-600 hover:text-gray-800'
                                        }`}>
                                            {category} ({products.length} items)
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Price</h3>
                            <div className="space-y-2">
                                {[
                                    { label: '0-20', value: '0-20' },
                                    { label: '20-40', value: '20-40' }
                                ].map((range) => (
                                    <label key={range.value} className="flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedPriceRange === range.value}
                                            onChange={(e) => setSelectedPriceRange(e.target.checked ? range.value : '')}
                                            className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                                        />
                                        <span className="ml-2 text-sm text-gray-600">{range.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Size</h3>
                            <div className="space-y-2">
                                {['L', 'M', 'S', 'XL'].map((size) => (
                                    <label key={size} className="flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedSizes.includes(size)}
                                            onChange={() => handleSizeToggle(size)}
                                            className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                                        />
                                        <span className="ml-2 text-sm text-gray-600">{size}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    
                    <div className="flex-1">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    
                                    <div className="relative overflow-hidden bg-gray-100 aspect-square">
                                        <Link to={`/product/${product.id}`}>
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                                            />
                                        </Link>

                                        
                                        

                                        
                                        <button
                                            onClick={() => handleAddToCart(product)}
                                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 hover:bg-red-500 hover:text-white"
                                        >
                                            <MdOutlineShoppingCart size={16} />
                                            Add to Cart
                                        </button>
                                    </div>

                                    
                                    <div className="p-4">
                                        <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
                                            {product.title}
                                        </h3>
                                        <div className="flex items-center gap-2">
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
                </div>
            </div>
        </div>
    );
};

export default Shop;