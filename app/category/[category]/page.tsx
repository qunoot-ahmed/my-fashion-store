import { getProductsByCategory } from '@/app/lib/products';
import ProductCard from '@/app/components/ProductCard';
import { notFound } from 'next/navigation';
import Script from 'next/script';

export function generateStaticParams() {
  return [
    { category: 'men' },
    { category: 'women' },
    { category: 'kids' },
  ];
}

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  
  // Validate category
  if (!['men', 'women', 'kids'].includes(category)) {
    notFound();
  }
  
  const products = getProductsByCategory(category as 'men' | 'women' | 'kids');
  
  const categoryTitle = {
    men: "Men's Collection",
    women: "Women's Collection",
    kids: "Kids' Collection",
  }[category];
  
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">{categoryTitle}</h1>
        
        {category === 'men' && (
          <div className="mb-8 flex justify-center">
            <iframe 
              src="https://licencetotest.com/player/3371741f-5d66-4acb-af5c-8b692c6e022b" 
              title="Zeacon | Embed Video" 
              width="640px" 
              height="360px" 
              allowFullScreen 
              style={{ border: 0 }}
            />
            <Script 
              id="zeacon-sdk-correlation-manager" 
              src="https://licencetotest.com/sdk/correlation-manager/bundle.js"
              strategy="afterInteractive"
            />
          </div>
        )}
        
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
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
        )}
      </div>
    </div>
  );
} 