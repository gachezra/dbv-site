import { ArrowRight, Shield, Truck, Clock } from 'lucide-react';
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-sky-900 to-sky-700 text-white">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Premium Electronics for
              <span className="text-sky-300"> Modern Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0">
              Discover cutting-edge technology solutions for your business. Quality assured, competitively priced, and backed by expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg bg-white text-sky-900 hover:bg-gray-100 transition duration-150"
              >
                Get Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#featured-products"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white/10 transition duration-150"
              >
                View Products
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: "Quality Assured",
                description: "All products verified & tested"
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                description: "Nationwide shipping available"
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Expert assistance anytime"
              },
              {
                icon: ArrowRight,
                title: "Easy Returns",
                description: "30-day return policy"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <feature.icon className="h-8 w-8 mb-4 text-sky-300" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;