import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './lib/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fashion Store - Shop for Men, Women & Kids',
  description: 'Find the latest fashion trends for men, women, and kids at our online store.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Start of Zeacon Code */}
        <script
          type="text/javascript"
          async
          id="zeacon-sdk"
          src="https://licencetotest.com/sdk/correlator.js?api-key=8e6b8b84-de2b-4cae-a7d7-d7e67f73847e"
        />
        {/* End of Zeacon Code */}
      </head>
      <body className={inter.className}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
} 