import React from "react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

const SvgIcon: React.FC<IconProps> = ({ name, size = 24, className = "" }) => {
  const iconPath = `/images/icons/${name}.svg`;

  return (
    <img
      src={iconPath}
      alt={name}
      width={size}
      height={size}
      className={className}
    />
  );
};

export default SvgIcon;

// Predefined icon components for common use
export const HeartIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 24,
  className = "",
}) => <SvgIcon name="heart" size={size} className={className} />;

export const ShoppingCartIcon: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 24, className = "" }) => (
  <SvgIcon name="shopping-cart" size={size} className={className} />
);

export const StarIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 24,
  className = "",
}) => <SvgIcon name="star" size={size} className={className} />;

export const ShieldCheckIcon: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 24, className = "" }) => (
  <SvgIcon name="shield-check" size={size} className={className} />
);

export const TruckIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 24,
  className = "",
}) => <SvgIcon name="truck" size={size} className={className} />;
