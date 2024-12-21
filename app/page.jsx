"use client"

import Header from './components/Header';
import Footer from './components/Footer';
import ReviewsSection from './components/ReviewsSection';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import fetchProducts from './components/fetchProducts';

let products = [];

export default async function Home() {
  products = await fetchProducts();

  console.log('Products: ', products);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "1000+", label: "Products Available" },
              { number: "98%", label: "Customer Satisfaction" },
              { number: "24/7", label: "Technical Support" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-4xl font-bold text-sky-600 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FeaturedProducts products={products} />
      <ReviewsSection />

      <Footer />
    </div>
  );
}