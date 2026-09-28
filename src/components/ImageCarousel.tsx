// src/components/ImageCarousel.tsx
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const images = [
  { src: '/gallery/gallery_image_1.jpg', title: 'UIT RGPV Shivpuri Main Campus Building' },
  { src: '/gallery/gallery_image_2.jpg', title: 'UIT RGPV Academic Block and Classrooms' },
  { src: '/gallery/gallery_image_3.jpg', title: 'UIT RGPV Engineering Labs and Research' },
  { src: '/gallery/gallery_image_4.jpg', title: 'UIT RGPV Campus Activities and Events' },
  { src: '/gallery/gallery_image_5.jpg', title: 'UIT RGPV Student Community and Seminars' },
  { src: '/gallery/gallery_image_6.jpg', title: 'UIT RGPV Campus Greenery and Surroundings' },
  { src: '/gallery/gallery_image_7.jpg', title: 'UIT RGPV Workshops and Hands-on Learning' },
  { src: '/gallery/gallery_image_8.jpeg', title: 'UIT RGPV Cultural and Tech Fest Celebrations' },
];

const ImageCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3500 })]);

  return (
    <div className="embla w-full rounded-2xl overflow-hidden shadow-xl" ref={emblaRef} aria-label="Campus Photo Showcase">
      <div className="embla__container">
        {images.map((item, index) => (
          <div className="embla__slide w-full" key={index}>
            <div className="w-full relative h-[320px] sm:h-[440px] md:h-[540px] lg:h-[600px] bg-slate-900/10">
              <img
                src={item.src}
                alt={item.title}
                width={1600}
                height={600}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 sm:p-6 text-white">
                <p className="text-sm sm:text-base md:text-lg font-medium drop-shadow-md">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
