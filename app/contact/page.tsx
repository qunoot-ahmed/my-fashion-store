'use client';

import Link from 'next/link';
import { FaArrowLeft, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';

// Define form state type explicitly
interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Add type annotation for event parameter
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Add type annotation for event parameter
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission to your backend
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-primary mb-8 hover:underline">
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
            <p className="text-gray-700 mb-6">
              We're here to help! If you have any questions about our products, orders, or services, please don't hesitate to reach out.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <FaEnvelope className="text-primary mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-700">support@fashionstore.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaPhone className="text-primary mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-700">
                    123 Fashion Street<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-green-100 text-green-700 p-4 rounded-md mb-6">
                <p className="font-medium">Thank you for your message!</p>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="Order Inquiry">Order Inquiry</option>
                    <option value="Product Question">Product Question</option>
                    <option value="Return Request">Return Request</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn btn-primary"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Store Hours</h2>
          <div className="grid grid-cols-2 max-w-md mx-auto">
            <div className="text-left">Monday - Friday</div>
            <div className="text-right">9:00 AM - 8:00 PM</div>
            <div className="text-left">Saturday</div>
            <div className="text-right">10:00 AM - 6:00 PM</div>
            <div className="text-left">Sunday</div>
            <div className="text-right">11:00 AM - 5:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
} 