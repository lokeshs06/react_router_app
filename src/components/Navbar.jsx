import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartTotalQuantity } = useCart();
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-indigo-600" />
            <span className="font-bold text-xl text-gray-900 tracking-tight">FakeStore</span>
          </Link>
          
          <div className="flex space-x-8 items-center">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              Products
            </Link>
            <Link 
              to="/cart" 
              className={`relative flex items-center p-2 rounded-full transition-colors ${location.pathname === '/cart' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <ShoppingCart className="h-6 w-6" />
              {cartTotalQuantity > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                  {cartTotalQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
