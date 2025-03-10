'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '@/app/lib/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Fashion Store
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-500 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-primary">
            Home
          </Link>
          <Link href="/category/men" className="text-gray-700 hover:text-primary">
            Men
          </Link>
          <Link href="/category/women" className="text-gray-700 hover:text-primary">
            Women
          </Link>
          <Link href="/category/kids" className="text-gray-700 hover:text-primary">
            Kids
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-primary">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-primary">
            Contact
          </Link>
        </nav>

        {/* User and Cart */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/account" className="text-gray-700 hover:text-primary">
            <FaUser size={20} />
          </Link>
          <Link href="/cart" className="text-gray-700 hover:text-primary relative">
            <FaShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link href="/category/men" className="text-gray-700 hover:text-primary">
              Men
            </Link>
            <Link href="/category/women" className="text-gray-700 hover:text-primary">
              Women
            </Link>
            <Link href="/category/kids" className="text-gray-700 hover:text-primary">
              Kids
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary">
              Contact
            </Link>
            <div className="flex items-center space-x-4 pt-2 border-t">
              <Link href="/account" className="text-gray-700 hover:text-primary">
                <FaUser size={20} />
                <span className="ml-2">Account</span>
              </Link>
              <Link href="/cart" className="text-gray-700 hover:text-primary relative">
                <FaShoppingCart size={20} />
                <span className="ml-2">Cart</span>
                {totalItems > 0 && (
                  <span className="absolute top-0 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
} 