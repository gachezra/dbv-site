import { useState } from 'react';
import { Package, Star } from 'lucide-react';

const FeaturedProducts = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Take only top 3 products
  const topProducts = products?.slice(0, 3) || [];

  return (
    <section id="featured-products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="h-8 w-8 text-sky-600" />
            <h2 className="text-3xl font-bold text-gray-900">Top Ordered Products</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our most popular electronics, trusted by businesses nationwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {topProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden border border-gray-200"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 p-8">
                <Package className="w-full h-full text-sky-600/30 group-hover:text-sky-600/40 transition-colors duration-200" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sky-600 text-lg font-semibold">Ksh. {product.price}</p>
                  <span className="px-3 py-1 text-sm bg-sky-100 text-sky-800 rounded-full">
                    {product.stock} in stock
                  </span>
                </div>
                <a
                  href="/quotation"
                  className="block w-full text-center py-3 px-4 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-700 transition-colors duration-200"
                >
                  Request Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;