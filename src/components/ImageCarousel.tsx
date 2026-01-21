// src/components/ImageCarousel.tsx
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';

const images = [
  '/gallery/gallery_image_1.jpg',
  '/gallery/gallery_image_2.jpg',
  '/gallery/gallery_image_3.jpg',
  '/gallery/gallery_image_4.jpg',
  '/gallery/gallery_image_5.jpg',
  '/gallery/gallery_image_6.jpg',
  '/gallery/gallery_image_7.jpg',
  '/gallery/gallery_image_8.jpeg',
];

const ImageCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  return (
    <div className="embla w-full" ref={emblaRef}>
      <div className="embla__container">
        {images.map((src, index) => (
          <div className="embla__slide w-full" key={index}>
            <div className="w-full relative h-[600px]">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
