'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaShoppingCart, FaCreditCard } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useCart } from '@/app/lib/CartContext';
import { Product } from '@/app/lib/products';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();
  const router = useRouter();
  
  const handleAddToCart = () => {
    // Add the product to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    
    // Show success feedback
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };
  
  const handleCheckout = () => {
    // Add the product to cart and navigate to checkout
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    
    // Navigate to cart page
    router.push('/cart');
  };
  
  return (
    <div className="py-12">
      <div className="container">
        <Link href={`/category/${product.category}`} className="inline-flex items-center text-primary mb-8 hover:underline">
          <FaArrowLeft className="mr-2" />
          Back to {product.category === 'men' ? "Men's" : product.category === 'women' ? "Women's" : "Kids'"} Collection
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl font-bold text-primary mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-8">{product.description}</p>
            
            {/* Quantity Selector */}
            <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <button
                  type="button"
                  className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-100"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border-t border-b border-gray-300 py-1"
                />
                <button
                  type="button"
                  className="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-100"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`flex-1 btn ${isAdded ? 'bg-green-500 hover:bg-green-600' : 'btn-primary'} flex items-center justify-center`}
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
              
              {/* Buy Now Button */}
              <button
                onClick={handleCheckout}
                className="flex-1 btn btn-secondary flex items-center justify-center"
              >
                <FaCreditCard className="mr-2" />
                Buy Now
              </button>
            </div>
            
            {/* Additional Information */}
            <div className="mt-12 border-t pt-8">
              <h3 className="text-lg font-medium mb-4">Product Details</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>High-quality materials</li>
                <li>Comfortable fit</li>
                <li>Easy to care for</li>
                <li>Imported</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 