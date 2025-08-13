'use client';

import { useEffect, useState } from 'react';
import PortfolioCard from './PortfolioCard';
import { PortfolioItem } from '@/data/data';

interface GenericSliderProps {
  data: PortfolioItem[];
  slidesPerView: number;
  heightClass?: string;
  cardType: 'portfolio';
}

export function GenericSlider({ data, slidesPerView, heightClass, cardType }: GenericSliderProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className={`relative w-full flex flex-col justify-center items-center ${heightClass || ''}`}>
        <div className="w-full px-4 sm:px-6 lg:px-0 max-w-[1440px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.slice(0, 4).map((item, index) => (
              <PortfolioCard
                key={index}
                image={item.image}
                title={item.title}
                href={item.href}
                desc={item.desc}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full flex flex-col justify-center items-center ${heightClass || ''}`}>
      <div className="w-full px-4 sm:px-6 lg:px-0 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <PortfolioCard
              key={index}
              image={item.image}
              title={item.title}
              href={item.href}
              desc={item.desc}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}