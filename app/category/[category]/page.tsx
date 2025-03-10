import { getProductsByCategory } from '@/app/lib/products';
import ProductCard from '@/app/components/ProductCard';
import { notFound } from 'next/navigation';

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