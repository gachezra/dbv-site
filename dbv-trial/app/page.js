import Head from 'next/head';
import ProductCard from './components/ProductCard';

const products = [
  { id: 1, name: 'Smartphone', price: 200, stock: 50 },
  { id: 2, name: 'Laptop', price: 800, stock: 20 },
  { id: 3, name: 'Headphones', price: 50, stock: 100 },
];

export default function Home() {
  return (
    <div className="bg-sky-50 min-h-screen text-gray-800">
      <Head>
        <title>DBV Enterprises</title>
      </Head>
      <header className="p-6 bg-sky-500 text-white text-center">
        <h1 className="text-3xl font-bold">DBV Enterprises</h1>
        <p>Your one-stop shop for electronics & supplies</p>
      </header>
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/quotation"
            className="inline-block px-6 py-3 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600"
          >
            Get a Quotation
          </a>
        </div>
      </main>
    </div>
  );
}
