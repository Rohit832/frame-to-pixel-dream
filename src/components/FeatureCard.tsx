import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  backgroundColor: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, backgroundColor }) => {
  return (
    <div className={`flex border shadow-[3px_4px_0_0_#000] ${backgroundColor} mb-[26px] px-7 py-[22px] rounded-lg border-solid border-black max-sm:mb-5 max-sm:px-5 max-sm:py-[18px]`}>
      <div className="flex items-center gap-[17px]">
        <div>{icon}</div>
        <div className="text-xl font-bold text-black max-sm:text-base">
          {title}
        </div>
      </div>
    </div>
  );
};
