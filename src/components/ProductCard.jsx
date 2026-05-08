import { ShoppingCart, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, isInCart } = useCart();
  
  const inCart = isInCart(product.id);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full border border-gray-100">
      <div className="p-6 flex justify-center items-center bg-white h-64">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-5 flex flex-col flex-grow border-t border-gray-50">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-900 text-lg line-clamp-2" title={product.title}>
            {product.title}
          </h3>
          <span className="font-bold text-indigo-600 ml-2 whitespace-nowrap">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow">
          {product.description}
        </p>
        
        <div className="mt-auto pt-4">
          {inCart ? (
            <button
              onClick={() => removeFromCart(product.id)}
              className="w-full py-2.5 px-4 bg-red-50 hover:bg-red-100 text-red-600 font-medium rounded-lg flex items-center justify-center transition-colors gap-2"
            >
              <Trash2 className="w-5 h-5" />
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg flex items-center justify-center transition-colors gap-2 shadow-sm"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
