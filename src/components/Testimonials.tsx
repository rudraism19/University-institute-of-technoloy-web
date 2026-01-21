import { Card, CardContent } from '@/components/ui/card';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Rishabh Dwivedi",
        role: "Alumni, CSE (2020-2024)",
        content: "UIT RGPV provided me with the perfect platform to grow appropriately technically. The faculty support and coding culture are top-notch.",
        avatar: "https://ui-avatars.com/api/?name=Rishabh+Dwivedi&background=random"
    },
    {
        name: "Priya Sharma",
        role: "Student, EEE (3rd Year)",
        content: "The campus life is vibrant with so many clubs and events. I've learned leadership skills along with my engineering studies.",
        avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=random"
    },
    {
        name: "Amit Patel",
        role: "Placed at TCS",
        content: "The placement cell is very active. Mock interviews and aptitude sessions helped me crack my dream job.",
        avatar: "https://ui-avatars.com/api/?name=Amit+Patel&background=random"
    }
];

export const Testimonials = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

    return (
        <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
                {testimonials.map((item, index) => (
                    <div className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4" key={index}>
                        <Card className="h-full border-none shadow-md bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                            <CardContent className="p-6 flex flex-col gap-4 h-full">
                                <div className="flex gap-1 text-primary/50">
                                    <Quote className="w-8 h-8" />
                                </div>
                                <p className="text-muted-foreground flex-grow italic">"{item.content}"</p>
                                <div className="flex items-center gap-4 mt-auto">
                                    <Avatar>
                                        <AvatarImage src={item.avatar} />
                                        <AvatarFallback>{item.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-sm">{item.name}</p>
                                        <p className="text-xs text-muted-foreground">{item.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};
