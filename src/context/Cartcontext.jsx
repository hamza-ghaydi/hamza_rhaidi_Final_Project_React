import { createContext, useContext, useReducer } from 'react';


const CART_ACTIONS = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    UPDATE_QUANTITY: 'UPDATE_QUANTITY',
    CLEAR_CART: 'CLEAR_CART'
};


const cartReducer = (state, action) => {
    switch (action.type) {
        case CART_ACTIONS.ADD_TO_CART: {
            console.log('Reducer - ADD_TO_CART action:', action.payload);
            console.log('Current cart state:', state.items);

            const existingItem = state.items.find(item =>
                item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
            );

            console.log('Existing item found:', existingItem);

            if (existingItem) {
                const newState = {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
                            ? { ...item, quantity: item.quantity + action.payload.quantity }
                            : item
                    )
                };
                console.log('Updated cart state (existing item):', newState.items);
                return newState;
            } else {
                const newState = {
                    ...state,
                    items: [...state.items, { ...action.payload }]
                };
                console.log('Updated cart state (new item):', newState.items);
                return newState;
            }
        }
        
        case CART_ACTIONS.REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item =>
                    !(item.id === action.payload.id && item.selectedSize === action.payload.selectedSize)
                )
            };

        case CART_ACTIONS.UPDATE_QUANTITY:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ).filter(item => item.quantity > 0)
            };
            
        case CART_ACTIONS.CLEAR_CART:
            return {
                ...state,
                items: []
            };
            
        default:
            return state;
    }
};


const initialState = {
    items: []
};


const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    
    const addToCart = (product) => {
        console.log('Cart context - adding product:', product);
        dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: product });
        console.log('Cart context - dispatch called');
    };

    const removeFromCart = (productId, selectedSize) => {
        dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: { id: productId, selectedSize } });
    };

    const updateQuantity = (productId, selectedSize, quantity) => {
        dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id: productId, selectedSize, quantity } });
    };

    const clearCart = () => {
        dispatch({ type: CART_ACTIONS.CLEAR_CART });
    };

    
    const cartItemsCount = state.items.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);

    const value = {
        items: state.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartItemsCount,
        cartTotal
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
