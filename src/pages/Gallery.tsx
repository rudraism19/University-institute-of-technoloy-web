import { Card, CardContent } from '@/components/ui/card';

const galleryItems = [
  { src: '/gallery/gallery_image_1.jpg', alt: 'UIT RGPV Shivpuri Main Campus Academic Block' },
  { src: '/gallery/gallery_image_2.jpg', alt: 'Classroom Facilities and Seminar Discussions at UIT RGPV' },
  { src: '/gallery/gallery_image_3.jpg', alt: 'Computer Science and Engineering Labs at UIT RGPV' },
  { src: '/gallery/gallery_image_4.jpg', alt: 'Student Activities and Campus Events at UIT RGPV Shivpuri' },
  { src: '/gallery/gallery_image_5.jpg', alt: 'Technical Workshops and Student Gatherings' },
  { src: '/gallery/gallery_image_6.jpg', alt: 'UIT RGPV Campus Garden and Green Pathways' },
  { src: '/gallery/gallery_image_7.jpg', alt: 'Engineering Practical Experiments and Workshop Machinery' },
  { src: '/gallery/gallery_image_8.jpeg', alt: 'Annual College Cultural & Tech Festival at UIT RGPV' },
];

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-primary mb-3">Campus Photo Gallery</h1>
        <p className="text-muted-foreground text-base md:text-lg">
          Explore campus facilities, modern laboratories, academic life, and student activities at University Institute of Technology, Shivpuri.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryItems.map((item, index) => (
          <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full break-inside-avoid group border-border/50">
            <CardContent className="p-0 relative">
              <div className="overflow-hidden bg-slate-900/5 aspect-[16/10]">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={750}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3 bg-white/90 dark:bg-slate-900/90 border-t border-border/40">
                <p className="text-xs sm:text-sm font-medium text-foreground line-clamp-2">
                  {item.alt}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
