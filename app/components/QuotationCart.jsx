'use client'

import { useEffect, useState } from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { useCart } from '../context/CartContext';

const QuotationCart = () => {
  const router = useRouter();
  const [cartCount, setCartCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { selectedProducts, removeFromCart, isOpen, toggleCart } = useCart();

  useEffect(() => {
    setCartCount(selectedProducts.length);
    if (selectedProducts.length > 0 && !isOpen) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  }, [selectedProducts, isOpen]);

  const totalPrice = selectedProducts.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const handleCheckout = () => {
    const invoiceId = uuidv4();
    toggleCart();
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    router.push(`/catalog/${invoiceId}`);
  };

  return (
    <>
      {/* Only show cart button if there are items and cart is not open */}
      {!isOpen && selectedProducts.length > 0 && (
        <button
          onClick={toggleCart}
          className={`fixed top-40 left-4 z-50 bg-sky-600 text-white p-3 rounded-full shadow-lg hover:bg-sky-700 transition-all duration-300 ${
            isAnimating ? 'animate-pulse' : ''
          } md:left-6`}
          aria-label="Open cart"
        >
          <div className="relative">
            <ShoppingCart size={24} />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
              {cartCount}
            </div>
          </div>
        </button>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 md:hidden"
          onClick={toggleCart}
        />
      )}

      {/* Cart Panel */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 
        w-full md:w-96 lg:w-[400px] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="bg-sky-600 text-white p-4 flex justify-between items-center sticky">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <ShoppingCart size={24} />
            Your Quotation
          </h2>
          <button
            onClick={toggleCart}
            className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-1"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-4 h-[calc(100vh-180px)] overflow-y-auto">
          {selectedProducts.length > 0 ? (
            <ul className="space-y-4">
              {selectedProducts.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-sm font-medium text-sky-600">
                          Ksh. {(item.quantity * item.price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200 p-1 hover:bg-gray-100 rounded-full"
                      aria-label="Remove item"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center text-gray-500 mt-8">
              <ShoppingCart size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="font-medium">Your cart is empty</p>
              <p className="text-sm mt-2">
                Add items from the catalog to get started
              </p>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 font-medium">Total Amount</span>
            <span className="text-xl font-bold text-sky-600">
              Ksh. {totalPrice.toFixed(2)}
            </span>
          </div>
          <button
            className="w-full bg-sky-600 text-white py-3 rounded-lg hover:bg-sky-700 transition-colors duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleCheckout}
            disabled={selectedProducts.length === 0}
          >
            Generate Invoice
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default QuotationCart;