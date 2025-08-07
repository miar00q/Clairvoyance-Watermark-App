import React from 'react';

interface PhotoCardProps {
  title: string;
  date: string;
  imageUrl: string;
  onClick?: () => void;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ title, date, imageUrl, onClick }) => {
  return (
    <article 
      className="flex w-[121px] h-40 flex-col items-start gap-1 relative max-sm:w-[calc(50%_-_4px)] cursor-pointer hover:opacity-80 transition-opacity"
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={title}
        className="h-[120px] shrink-0 self-stretch relative rounded-2xl object-cover"
      />
      <div className="flex w-[120px] flex-col items-start relative">
        <h3 className="h-5 self-stretch overflow-hidden text-[#1D1B20] text-ellipsis whitespace-nowrap text-sm font-medium leading-5 tracking-[0.1px] relative">
          {title}
        </h3>
        <time className="h-4 self-stretch overflow-hidden text-[#49454F] text-ellipsis whitespace-nowrap text-xs font-normal leading-4 tracking-[0.4px] relative">
          {date}
        </time>
      </div>
    </article>
  );
};
