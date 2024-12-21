'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Package } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Quotation() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  const getProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    } catch (e) {
      console.error('Error fetching products: ', e)      
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <Header />

      <main className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Package className="text-sky-600" size={28} />
            <h2 className="text-2xl font-semibold text-gray-700">Available Products</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200/80"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                <div className="space-y-2">
                  <p className="text-sky-600 font-semibold">Ksh. {product.price}</p>
                  <p className="text-sm text-gray-500">
                    {product.stock} units available
                  </p>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor={`quantity-${product.id}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Select Quantity:
                  </label>
                  <select
                    id={`quantity-${product.id}`}
                    className="w-full p-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-shadow duration-200"
                    onChange={(e) => addToCart(product, parseInt(e.target.value, 10))}
                    defaultValue=""
                  >
                    <option value="" disabled>-- Choose --</option>
                    {Array.from({ length: product.stock }, (_, i) => i + 1).map((qty) => (
                      <option key={qty} value={qty}>
                        {qty} {qty === 1 ? 'unit' : 'units'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}