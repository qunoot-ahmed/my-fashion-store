'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function AboutPage() {
  useEffect(() => {
    // Add the Zeacon script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.id = 'zeacon-sdk';
    script.src = 'https://licencetotest.com/sdk/correlator.js?api-key=8e6b8b84-de2b-4cae-a7d7-d7e67f73847e';
    document.head.appendChild(script);

    // Add the correlation manager script
    const correlationScript = document.createElement('script');
    correlationScript.type = 'text/javascript';
    correlationScript.id = 'zeacon-sdk-correlation-manager';
    correlationScript.src = 'https://licencetotest.com/sdk/correlation-manager/bundle.js';
    document.body.appendChild(correlationScript);

    return () => {
      // Cleanup scripts on unmount
      const zeaconScript = document.getElementById('zeacon-sdk');
      const correlationManagerScript = document.getElementById('zeacon-sdk-correlation-manager');
      if (zeaconScript) document.head.removeChild(zeaconScript);
      if (correlationManagerScript) document.body.removeChild(correlationManagerScript);
    };
  }, []);

  return (
    <div className="py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-primary mb-8 hover:underline">
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-center">About Our Fashion Store</h1>
        
        <div className="mb-10">
          <p className="text-lg text-gray-700 mb-6">
            Welcome to Fashion Store, your premier destination for the latest trends in men's, women's, and children's fashion. 
            Since our founding in 2023, we've been dedicated to providing high-quality clothing and exceptional customer service.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our mission is to help you express your unique style through fashion that's both trendy and affordable. 
            We carefully curate our collections to ensure we offer something for everyone, regardless of age or style preference.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Story</h2>
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-3xl">
              <div className="aspect-video">
                <iframe 
                  src="https://licencetotest.com/player/493af4df-1008-4aa2-8426-c20d8b16410f" 
                  title="Zeacon | Embed Video" 
                  width="100%"
                  height="100%"
                  allowFullScreen={true}
                  style={{ border: 0 }}
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary">Quality</h3>
              <p className="text-gray-700">
                We source only the finest materials and partner with ethical manufacturers to ensure our products meet the highest standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary">Sustainability</h3>
              <p className="text-gray-700">
                We're committed to reducing our environmental footprint through eco-friendly practices and sustainable sourcing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary">Community</h3>
              <p className="text-gray-700">
                We believe in giving back and regularly support local communities through various charity partnerships.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Team</h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Behind Fashion Store is a team of passionate fashion enthusiasts dedicated to bringing you the best shopping experience.
            Our diverse team brings together expertise from various backgrounds in fashion, retail, and customer service.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Get In Touch</h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 