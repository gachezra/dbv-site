'use client';

import { useState } from 'react';

const products = [
  { id: 1, name: 'Smartphone', price: 200, stock: 50 },
  { id: 2, name: 'Laptop', price: 800, stock: 20 },
  { id: 3, name: 'Headphones', price: 50, stock: 100 },
];

export default function Quotation() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleAddToQuotation = (product, quantity) => {
    const updatedProducts = [...selectedProducts];
    updatedProducts.push({ ...product, quantity });
    setSelectedProducts(updatedProducts);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-sky-500 text-center mb-6">
        Quotation
      </h1>
      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md p-4 rounded-lg flex items-center justify-between"
          >
            <div>
              <h2 className="font-semibold">{product.name}</h2>
              <p>Price: ${product.price}</p>
              <p>Stock: {product.stock}</p>
            </div>
            <div>
              <select
                className="border border-gray-300 rounded-lg p-2"
                onChange={(e) =>
                  handleAddToQuotation(product, parseInt(e.target.value, 10))
                }
              >
                <option value="">Select quantity</option>
                {Array.from({ length: product.stock }, (_, i) => i + 1).map(
                  (qty) => (
                    <option key={qty} value={qty}>
                      {qty}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
        <h2 className="font-semibold text-lg mb-4">Selected Products</h2>
        {selectedProducts.length > 0 ? (
          <ul>
            {selectedProducts.map((item, index) => (
              <li key={index}>
                {item.quantity} x {item.name} (${item.price * item.quantity})
              </li>
            ))}
          </ul>
        ) : (
          <p>No products selected yet.</p>
        )}
      </div>
    </div>
  );
}
