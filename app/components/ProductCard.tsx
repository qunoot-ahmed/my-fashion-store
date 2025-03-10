'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '@/app/lib/CartContext';
import { Product } from '@/app/lib/products';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  
  const handleAddToCart = () => {
    // Create a product object to add to cart
    const product: Product = {
      id, 
      name, 
      price,
      image,
      category: category as 'men' | 'women' | 'kids',
      description: '' // Add an empty description as it's required by the Product interface
    };
    
    // Add to cart
    addToCart(product);
    
    // Show feedback
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div 
      className="card group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Quick add to cart button that appears on hover */}
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-2 transition-transform duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <button 
            onClick={handleAddToCart}
            className={`w-full btn ${isAdded ? 'bg-green-500 hover:bg-green-600' : 'btn-primary'} flex items-center justify-center`}
            disabled={isAdded}
          >
            {isAdded ? (
              <>✓ Added to Cart</>
            ) : (
              <>
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <Link href={`/product/${id}`} className="block">
          <h3 className="text-lg font-medium text-gray-900 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <p className="text-lg font-bold text-primary">${price.toFixed(2)}</p>
      </div>
    </div>
  );
} 