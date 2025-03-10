import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedProducts } from './lib/products';
import ProductCard from './components/ProductCard';

export default function Home() {
  const featuredProducts = getFeaturedProducts(6);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/women/lethicia-matos-BxBW-OyjaiA-unsplash.jpg"
            alt="Fashion Store Hero"
            fill
            priority
            className="object-cover opacity-50"
          />
        </div>
        <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Style</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Shop the latest trends in fashion for men, women, and kids.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/category/men" className="btn btn-primary">
              Shop Men
            </Link>
            <Link href="/category/women" className="btn btn-primary">
              Shop Women
            </Link>
            <Link href="/category/kids" className="btn btn-primary">
              Shop Kids
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Men Category */}
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <Image
                src="/images/men/hassan-ouajbir-MkmcxwwCepY-unsplash.jpg"
                alt="Men's Fashion"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Men</h3>
                <Link 
                  href="/category/men" 
                  className="inline-block bg-white text-secondary px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            
            {/* Women Category */}
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <Image
                src="/images/women/carlos-vaz-KP4bxnxAilU-unsplash.jpg"
                alt="Women's Fashion"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Women</h3>
                <Link 
                  href="/category/women" 
                  className="inline-block bg-white text-secondary px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            
            {/* Kids Category */}
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <Image
                src="/images/kids/luke-michael-csKHA7NhGk0-unsplash.jpg"
                alt="Kids' Fashion"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Kids</h3>
                <Link 
                  href="/category/kids" 
                  className="inline-block bg-white text-secondary px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 