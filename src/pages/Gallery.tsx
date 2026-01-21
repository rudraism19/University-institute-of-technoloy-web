import { Card, CardContent } from '@/components/ui/card';

const galleryImages = [
  '/gallery/gallery_image_7.jpg',
  '/gallery/gallery_image_6.jpg',
  '/gallery/gallery_image_1.jpg',
  '/gallery/gallery_image_2.jpg',
  '/gallery/gallery_image_8.jpeg',
  '/gallery/gallery_image_3.jpg',
  '/gallery/gallery_image_4.jpg',
  '/gallery/gallery_image_5.jpg',
];

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Gallery</h1>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryImages.map((image, index) => (
          <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-full break-inside-avoid">
            <CardContent className="p-0">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
