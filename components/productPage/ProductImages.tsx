import React, { useState, useEffect } from 'react';

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
  const [primaryImage, setPrimaryImage] = useState<Image | undefined>(undefined);
  const [secondaryImages, setSecondaryImages] = useState<Image[]>([]);

  useEffect(() => {
    if (images.length > 0) {
      const initialPrimary = images.find(img => img.is_primary) || images[0];
      const rest = images.filter(img => img.id !== initialPrimary.id);
      setPrimaryImage(initialPrimary);
      setSecondaryImages(rest);
    }
  }, [images]);

  const handleImageSwap = (selectedImage: Image) => {
    if (!primaryImage) return;

    setPrimaryImage(selectedImage);
    setSecondaryImages(prevImages =>
      prevImages
        .filter(img => img.id !== selectedImage.id)
        .concat(primaryImage)
    );
  };

  const primaryImageUrl = primaryImage
    ? `https://res.cloudinary.com/dsezrayrn/image/upload/v1747945584/${primaryImage.image_url}`
    : 'https://res.cloudinary.com/dsezrayrn/image/upload/v1747945584/Image_gmbu3r.png';

  return (
    <div className="flex flex-col w-full max-w-md">
      {/* Primary Image */}
      <div className="mb-4">
        <img
          src={primaryImageUrl}
          alt={title + ' (Primary)'}
          className="w-full h-auto rounded-lg border-2 border-green-600 object-cover"
        />
      </div>

      {/* Secondary Images */}
      {secondaryImages.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {secondaryImages.map(img => (
            <img
              key={img.id}
              src={`https://res.cloudinary.com/dsezrayrn/image/upload/v1747945584/${img.image_url}`}
              alt={`${title} image`}
              className="w-20 h-20 rounded border border-gray-300 object-cover cursor-pointer hover:border-green-600"
              onClick={() => handleImageSwap(img)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImages;
