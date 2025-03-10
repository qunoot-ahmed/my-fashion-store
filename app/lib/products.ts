export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'men' | 'women' | 'kids';
}

export const products: Product[] = [
  // Men's products
  {
    id: 'men-1',
    name: 'Men\'s Casual Jacket',
    description: 'A stylish casual jacket for men, perfect for everyday wear.',
    price: 89.99,
    image: '/images/men/hassan-ouajbir-MkmcxwwCepY-unsplash.jpg',
    category: 'men',
  },
  {
    id: 'men-2',
    name: 'Men\'s Formal Shirt',
    description: 'A classic formal shirt for men, ideal for business meetings and formal events.',
    price: 49.99,
    image: '/images/men/mohamad-khosravi-vS0Kya7E5V4-unsplash.jpg',
    category: 'men',
  },
  {
    id: 'men-3',
    name: 'Men\'s Casual Sweater',
    description: 'A comfortable casual sweater for men, perfect for cool weather.',
    price: 59.99,
    image: '/images/men/ilya-gorborukov-syx5GyrkeZ8-unsplash.jpg',
    category: 'men',
  },
  {
    id: 'men-4',
    name: 'Men\'s Denim Jacket',
    description: 'A classic denim jacket for men, versatile and stylish.',
    price: 79.99,
    image: '/images/men/fares-hamouche-2BOZxtZhaUM-unsplash.jpg',
    category: 'men',
  },
  {
    id: 'men-5',
    name: 'Men\'s Casual T-Shirt',
    description: 'A comfortable casual t-shirt for men, perfect for everyday wear.',
    price: 29.99,
    image: '/images/men/isaac-ramirez-UNSj7BtOK0Q-unsplash.jpg',
    category: 'men',
  },
  {
    id: 'men-6',
    name: 'Men\'s Stylish Coat',
    description: 'A stylish coat for men, perfect for cold weather.',
    price: 129.99,
    image: '/images/men/mohamad-khosravi--eb0moHDPBI-unsplash.jpg',
    category: 'men',
  },

  // Women's products
  {
    id: 'women-1',
    name: 'Women\'s Casual Dress',
    description: 'A stylish casual dress for women, perfect for everyday wear.',
    price: 69.99,
    image: '/images/women/carlos-vaz-KP4bxnxAilU-unsplash.jpg',
    category: 'women',
  },
  {
    id: 'women-2',
    name: 'Women\'s Elegant Dress',
    description: 'An elegant dress for women, perfect for special occasions.',
    price: 99.99,
    image: '/images/women/lethicia-matos-BxBW-OyjaiA-unsplash.jpg',
    category: 'women',
  },
  {
    id: 'women-3',
    name: 'Women\'s Casual Outfit',
    description: 'A comfortable casual outfit for women, perfect for everyday wear.',
    price: 79.99,
    image: '/images/women/kai-s-photography-DeUmcgcf3is-unsplash.jpg',
    category: 'women',
  },
  {
    id: 'women-4',
    name: 'Women\'s Summer Dress',
    description: 'A light and airy summer dress for women, perfect for hot weather.',
    price: 59.99,
    image: '/images/women/jon-ly-Xn7GvimQrk8-unsplash.jpg',
    category: 'women',
  },
  {
    id: 'women-5',
    name: 'Women\'s Winter Coat',
    description: 'A warm winter coat for women, perfect for cold weather.',
    price: 149.99,
    image: '/images/women/ospan-ali-nyrSsBzhZ4Y-unsplash.jpg',
    category: 'women',
  },
  {
    id: 'women-6',
    name: 'Women\'s Casual Jacket',
    description: 'A stylish casual jacket for women, perfect for everyday wear.',
    price: 89.99,
    image: '/images/women/corey-saldana-pIKQbdSzF_k-unsplash.jpg',
    category: 'women',
  },

  // Kids' products
  {
    id: 'kids-1',
    name: 'Kids\' Casual Outfit',
    description: 'A comfortable casual outfit for kids, perfect for everyday wear.',
    price: 49.99,
    image: '/images/kids/luke-michael-csKHA7NhGk0-unsplash.jpg',
    category: 'kids',
  },
  {
    id: 'kids-2',
    name: 'Kids\' Colorful Dress',
    description: 'A colorful dress for kids, perfect for special occasions.',
    price: 39.99,
    image: '/images/kids/kelly-sikkema-0JErVRTMx4Y-unsplash.jpg',
    category: 'kids',
  },
  {
    id: 'kids-3',
    name: 'Kids\' Winter Jacket',
    description: 'A warm winter jacket for kids, perfect for cold weather.',
    price: 69.99,
    image: '/images/kids/patrick-echers-OPTW9ruQPyc-unsplash.jpg',
    category: 'kids',
  },
  {
    id: 'kids-4',
    name: 'Kids\' Casual Sweater',
    description: 'A comfortable casual sweater for kids, perfect for cool weather.',
    price: 34.99,
    image: '/images/kids/toa-heftiba-PVwcrzPNTpw-unsplash.jpg',
    category: 'kids',
  },
  {
    id: 'kids-5',
    name: 'Kids\' Casual T-Shirt',
    description: 'A comfortable casual t-shirt for kids, perfect for everyday wear.',
    price: 19.99,
    image: '/images/kids/terricks-noah-n9R0MN3XGvY-unsplash.jpg',
    category: 'kids',
  },
  {
    id: 'kids-6',
    name: 'Kids\' Stylish Outfit',
    description: 'A stylish outfit for kids, perfect for special occasions.',
    price: 59.99,
    image: '/images/kids/kin-li-a--1--Cmut8-unsplash.jpg',
    category: 'kids',
  },
];

export function getProductsByCategory(category: 'men' | 'women' | 'kids'): Product[] {
  return products.filter(product => product.category === category);
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getFeaturedProducts(count: number = 6): Product[] {
  // For simplicity, just return the first 'count' products
  // In a real app, you might have a 'featured' flag or use some other criteria
  return products.slice(0, count);
} 