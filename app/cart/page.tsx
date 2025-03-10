'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTrash, FaArrowLeft, FaCreditCard } from 'react-icons/fa';
import { useCart } from '@/app/lib/CartContext';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  
  const handleCheckout = () => {
    // In a real app, this would handle payment processing
    setIsCheckingOut(true);
    
    // Simulate a payment process
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutSuccess(true);
      clearCart();
    }, 2000);
  };
  
  if (checkoutSuccess) {
    return (
      <div className="container py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="bg-green-100 text-green-700 p-4 rounded-full inline-flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your order has been placed successfully.
          </p>
          <Link href="/" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  if (items.length === 0) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">
          Looks like you haven't added any items to your cart yet.
        </p>
        <Link href="/" className="btn btn-primary">
          Start Shopping
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {/* Cart Items */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Cart Items ({totalItems})</h2>
            </div>
            
            <ul className="divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center">
                  {/* Product Image */}
                  <div className="relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0 mr-6 mb-4 sm:mb-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-medium">
                      <Link href={`/product/${item.id}`} className="hover:text-primary">
                        {item.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                    <p className="text-primary font-medium">${item.price.toFixed(2)}</p>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center mt-4 sm:mt-0">
                    <div className="flex items-center border rounded-md mr-4">
                      <button
                        type="button"
                        className="px-3 py-1 bg-gray-100"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="px-3 py-1">{item.quantity}</span>
                      <button
                        type="button"
                        className="px-3 py-1 bg-gray-100"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="p-6 border-t">
              <Link href="/" className="inline-flex items-center text-primary hover:underline">
                <FaArrowLeft className="mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-4">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Order Summary</h2>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">${(totalPrice * 0.1).toFixed(2)}</span>
              </div>
              
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${(totalPrice + totalPrice * 0.1).toFixed(2)}</span>
                </div>
              </div>
              
              <button
                type="button"
                className="w-full btn btn-primary flex items-center justify-center"
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <FaCreditCard className="mr-2" />
                    Checkout
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 