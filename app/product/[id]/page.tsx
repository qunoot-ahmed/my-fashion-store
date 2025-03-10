import { notFound } from 'next/navigation';
import { getProductById, products } from '@/app/lib/products';
import ProductDetails from '@/app/components/ProductDetails';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const product = getProductById(id);
  
  if (!product) {
    notFound();
  }
  
  return <ProductDetails product={product} />;
} 