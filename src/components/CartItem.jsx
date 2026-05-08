import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex flex-col sm:flex-row items-center bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 gap-4 sm:gap-6 mb-4">
      <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-white p-2 rounded-lg flex items-center justify-center">
        <img 
          src={item.image} 
          alt={item.title} 
          className="max-h-full max-w-full object-contain"
        />
      </div>
      
      <div className="flex-grow flex flex-col justify-between w-full">
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-semibold text-gray-900 text-lg sm:text-xl line-clamp-2">
            {item.title}
          </h3>
          <p className="font-bold text-indigo-600 text-lg whitespace-nowrap">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
        
        <p className="text-gray-500 text-sm mb-4">
          ${item.price.toFixed(2)} each
        </p>
        
        <div className="flex justify-between items-center mt-auto">
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
            <button 
              onClick={() => updateQuantity(item.id, -1)}
              className="p-2 hover:bg-gray-200 text-gray-600 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-12 text-center font-medium text-gray-900">
              {item.quantity}
            </span>
            <button 
              onClick={() => updateQuantity(item.id, 1)}
              className="p-2 hover:bg-gray-200 text-gray-600 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          <button
            onClick={() => removeFromCart(item.id)}
            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-1"
          >
            <Trash2 className="w-5 h-5" />
            <span className="hidden sm:inline text-sm font-medium">Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
