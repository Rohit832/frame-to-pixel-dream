import React from 'react';

interface FeatureIconProps {
  image: string;
  altText: string;
  title?: string;
  description: string;
}

export const FeatureIcon: React.FC<FeatureIconProps> = ({ image, altText, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center min-w-[120px] max-md:flex-row max-md:text-left max-md:gap-5 max-md:w-full max-md:max-w-[400px] max-sm:flex-col max-sm:text-center max-sm:gap-[15px]">
      <img
        src={image}
        alt={altText}
        className="w-[105px] h-[105px] mb-3 max-md:w-20 max-md:h-20 max-sm:w-[70px] max-sm:h-[70px]"
      />
      {title && (
        <div className="text-5xl font-bold text-black mb-2 max-md:text-4xl max-sm:text-[28px]">
          {title}
        </div>
      )}
      <div className="text-xl font-medium text-black max-w-[168px] max-md:text-lg max-md:max-w-none max-sm:text-base">
        {description}
      </div>
    </div>
  );
};
