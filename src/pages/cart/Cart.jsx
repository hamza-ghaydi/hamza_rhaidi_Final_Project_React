
import { useCart } from '../../context/Cartcontext';
import { MdAdd, MdRemove, MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { items, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

    const navigate = useNavigate()

    return (
        <div className="min-h-screen pt-20">
            <div className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
                
                {items.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
                        <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
                        <span
                            onClick={() => navigate("/shop")}
                            className="text-red-500 hover:text-red-600 font-medium cursor-pointer"
                        >
                            Continue Shopping →
                        </span>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-sm border">

                        <div className="divide-y divide-gray-200">
                            {items.map((item, index) => (
                            <div key={`${item.id}-${item.selectedSize}-${index}`} className="p-6 flex items-center gap-4">
                                
                                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-800 mb-1">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">Size: {item.selectedSize}</p>
                                    <p className="text-gray-600 text-sm">${item.price.toFixed(2)} each</p>
                                </div>

                                
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                        disabled={item.quantity <= 1}
                                    >
                                        <MdRemove size={16} />
                                    </button>

                                    <span className="w-8 text-center font-medium">{item.quantity}</span>

                                    <button
                                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                    >
                                        <MdAdd size={16} />
                                    </button>
                                </div>

                                
                                <div className="text-right">
                                    <p className="font-semibold text-gray-800">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>

                                
                                <button
                                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                                    className="text-red-500 hover:text-red-700 p-2"
                                >
                                    <MdDelete size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    
                    <div className="border-t border-gray-200 p-6 bg-gray-50">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold text-gray-800">Total:</span>
                            <span className="text-2xl font-bold text-gray-800">${cartTotal.toFixed(2)}</span>
                        </div>
                        
                        <div className="flex gap-4">
                            <button
                                onClick={clearCart}
                                className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
                            >
                                Clear Cart
                            </button>
                            <button className="flex-1 bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors">
                                Checkout
                            </button>
                        </div>
                    </div>
                    </div>
                )}


                <div className="mt-8 text-center">
                    <span onClick={() => {navigate("/shop")}} className="text-red-500 hover:text-red-600 font-medium cursor-pointer"
                    >
                        ← Continue Shopping
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Cart;
