import React from "react";

interface ImageManagerProps {
  category: "banners" | "icons" | "products" | "categories";
  name: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const ImageManager: React.FC<ImageManagerProps> = ({
  category,
  name,
  alt,
  width,
  height,
  className = "",
}) => {
  const imagePath = `/images/${category}/${name}`;

  return (
    <img
      src={imagePath}
      alt={alt || name}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default ImageManager;

// Predefined components for different categories
export const BannerImage: React.FC<{
  name: string;
  alt?: string;
  className?: string;
}> = ({ name, alt, className = "" }) => (
  <ImageManager
    category="banners"
    name={name}
    alt={alt}
    className={className}
  />
);

export const IconImage: React.FC<{
  name: string;
  size?: number;
  alt?: string;
  className?: string;
}> = ({ name, size = 24, alt, className = "" }) => (
  <ImageManager
    category="icons"
    name={name}
    width={size}
    height={size}
    alt={alt}
    className={className}
  />
);

export const ProductImage: React.FC<{
  name: string;
  size?: number;
  alt?: string;
  className?: string;
}> = ({ name, size, alt, className = "" }) => (
  <ImageManager
    category="products"
    name={name}
    width={size}
    height={size}
    alt={alt}
    className={className}
  />
);

export const CategoryImage: React.FC<{
  name: string;
  size?: number;
  alt?: string;
  className?: string;
}> = ({ name, size, alt, className = "" }) => (
  <ImageManager
    category="categories"
    name={name}
    width={size}
    height={size}
    alt={alt}
    className={className}
  />
);

// Image paths constants for easy maintenance
export const IMAGE_PATHS = {
  banners: {
    momBaby: "banner-mom-baby.svg",
    quality: "banner-quality.svg",
    promotion: "banner-promotion.svg",
  },
  icons: {
    heart: "heart.svg",
    shoppingCart: "shopping-cart.svg",
    star: "star.svg",
    shieldCheck: "shield-check.svg",
    truck: "truck.svg",
  },
  products: {
    babyBottle: "baby-bottle.svg",
    teddyBear: "teddy-bear.svg",
  },
};

// Utility function to get image path
export const getImagePath = (category: string, imageName: string): string => {
  return `/images/${category}/${imageName}`;
};
