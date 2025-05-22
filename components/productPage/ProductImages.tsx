import React from 'react';

interface Image {
  id: string;
  image_url: string;
  is_primary: boolean;
}

interface ProductImagesProps {
  images: Image[] | undefined;
  title: string;
}

const ProductImages: React.FC<ProductImagesProps> = ({ images = [], title }) => {
  // Find primary image or fallback to first image or undefined
  const primaryImage = images.find(img => img.is_primary) || images[0];

  // Construct image URL or fallback to placeholder
  const primaryImageUrl = primaryImage
    ? `http://localhost:5000/images/${primaryImage.image_url}`
    : 'http://localhost:5000/images/placeholder.png';

  // Secondary images exclude primary
  const secondaryImages = images.filter(img => !img.is_primary);

  return (
    <div className="flex flex-col w-full max-w-md">
      {/* Primary Image */}
      <div className="mb-4">
        <img
          src={primaryImageUrl}
          alt={title + (primaryImage?.is_primary ? ' (Primary)' : '')}
          className="w-full h-auto rounded-lg border-2 border-green-600 object-cover"
        />
      </div>

      {/* Secondary Images */}
      {secondaryImages.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {secondaryImages.map(img => (
            <img
              key={img.id}
              src={`http://localhost:5000/images/${img.image_url}`}
              alt={`${title} image`}
              className="w-20 h-20 rounded border border-gray-300 object-cover cursor-pointer hover:border-green-600"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImages;
