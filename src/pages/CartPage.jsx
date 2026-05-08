import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const CartPage = () => {
  const { cartItems, cartSubtotal, discount, finalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center max-w-md w-full">
          <ShoppingBag className="w-24 h-24 text-gray-300 mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link 
            to="/" 
            className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl flex items-center justify-center transition-colors gap-2"
          >
            Start Shopping
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Cart Items List */}
        <div className="w-full lg:w-2/3">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        
        {/* Order Summary */}
        <div className="w-full lg:w-1/3 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="font-medium text-gray-900">${cartSubtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount (10%)</span>
              <span className="font-medium">-${discount.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-6 mb-8">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">Total Price</span>
              <span className="text-2xl font-extrabold text-indigo-600">${finalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-right">Including taxes & shipping</p>
          </div>
          
          <button className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl flex items-center justify-center transition-colors shadow-sm text-lg">
            Checkout Now
          </button>
          
          <div className="mt-6 text-center">
            <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-medium text-sm flex items-center justify-center gap-1">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
