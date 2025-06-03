import { useEffect } from 'react';
import { MdCheckCircle, MdClose } from 'react-icons/md';

const Toast = ({ message, isVisible, onClose, type = 'success' }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
            <div className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg ${
                type === 'success' ? 'bg-black text-white' : 'bg-red-500 text-white'
            }`}>
                <MdCheckCircle size={20} />
                <span className="font-medium">{message}</span>
                <button
                    onClick={onClose}
                    className="ml-2 hover:bg-white/20 rounded-full p-1"
                >
                    <MdClose size={16} />
                </button>
            </div>
        </div>
    );
};

export default Toast;
