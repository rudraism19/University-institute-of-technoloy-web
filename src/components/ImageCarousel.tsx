// src/components/ImageCarousel.tsx
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from '@/components/ui/card';

const images = [
  '/image.webp',
  '/team.webp',
  '/slide6.jpg',
];

const ImageCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((src, index) => (
          <div className="embla__slide" key={index}>
            <Card>
              <CardContent className="p-0">
                <img src={src} alt={`Slide ${index + 1}`} className="w-full h-64 object-cover" />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
