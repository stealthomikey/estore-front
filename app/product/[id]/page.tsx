'use client';

import React from 'react';
import { use } from 'react';
import useProductById from '@/hooks/useProductById';
import Container from '@/components/Container';
import ProductImages from '@/components/productPage/ProductImages';
import ProductInfo from '@/components/productPage/ProductInfo';
import ToggleInfo from '@/components/productPage/ToggleInfo';
import ErrorMessage from '@/components/productPage/ErrorMessage';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { id } = use(params);
  const { product, loading, error } = useProductById(id);

  // Handle Add to Cart callback (implement your logic)
  const handleAddToCart = (quantity: number) => {
    alert(`Added ${quantity} of ${product?.title} to cart.`);
    // Your real add to cart logic here...
  };

  if (loading) {
    return (
      <Container>
        <p className="text-center text-lg mt-10">Loading...</p>
      </Container>
    );
  }

  if (error || !product) {
    return <ErrorMessage message={error || 'Product not found.'} />;
  }

  // Convert necessary product fields to correct types before passing down
  const typedProduct = {
    ...product,
    rating: Number(product.rating),
    stock: Number(product.stock),
    price: String(product.price),     // keeping price as string as ProductInfo expects string
    discount: String(product.discount), // same for discount
  };

  return (
    <Container>
      {/* Top section: Images and Product Info */}
      <div className="flex flex-col md:flex-row gap-8 my-10">
        <ProductImages images={product.images} title={product.title} />
        <ProductInfo product={typedProduct} onAddToCart={handleAddToCart} />
      </div>

      {/* Toggle Info Section */}
    <ToggleInfo
    description={product.description}
    additionalInfo={product.additional_info}
    rating={typeof product.rating === 'string' ? parseFloat(product.rating) : product.rating ?? 0}
    />
    </Container>
  );
};

export default ProductPage;
