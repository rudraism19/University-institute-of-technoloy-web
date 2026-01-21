import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Calendar, MapPin, Trophy, Users as UsersIcon, Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LoginModal } from '@/components/LoginModal';
import { AddEventModal } from '@/components/AddEventModal';
import { User } from '@supabase/supabase-js';

interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  prize: string;
  location: string;
  category: string;
  max_participants: number;
  image_url: string;
  gallery_images?: string[];
}

interface EventsProps {
  user?: User | undefined;
}

const EventDetailsDialog = ({ event, isOpen, onClose }: { event: Event | null, isOpen: boolean, onClose: () => void }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  if (!event) return null;

  const images = event.gallery_images && event.gallery_images.length > 0
    ? event.gallery_images
    : [event.image_url];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{event.title}</DialogTitle>
          <DialogDescription>
            {event.category} | {new Date(event.event_date).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Carousel */}
          <div className="embla w-full overflow-hidden rounded-lg border" ref={emblaRef}>
            <div className="embla__container flex">
              {images.map((src, index) => (
                <div className="embla__slide flex-[0_0_100%] min-w-0" key={index}>
                  <div className="relative h-[400px] w-full">
                    <img
                      src={src}
                      alt={`${event.title} - Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center text-sm">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              <span className="font-semibold mr-2">Location:</span> {event.location}
            </div>
            <div className="flex items-center text-sm">
              <Trophy className="w-5 h-5 mr-2 text-primary" />
              <span className="font-semibold mr-2">Prize:</span> {event.prize}
            </div>
            <div className="flex items-center text-sm">
              <UsersIcon className="w-5 h-5 mr-2 text-primary" />
              <span className="font-semibold mr-2">Max Participants:</span> {event.max_participants}
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
            {event.description}
          </p>

          <div className="flex justify-end">
            <Button onClick={onClose}>Close</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Events = ({ user }: EventsProps) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false);

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('event_date', { ascending: true });

    const staticEvents: Event[] = [
      {
        id: 'static-1',
        title: 'Shakti: Garba Fest',
        description: 'Celebrate the spirit of Navratri with Shakti, our grand Garba Festival. Dance to the rhythm of tradition and culture.',
        event_date: '2024-10-10',
        prize: 'Trophies & Vouchers',
        location: 'College Ground',
        category: 'Cultural',
        max_participants: 500,
        image_url: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?w=800&auto=format&fit=crop&q=60',
        gallery_images: [
          'https://images.unsplash.com/photo-1570158268183-d296b2892211?w=800&auto=format&fit=crop&q=60',
          'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60'
        ]
      },
      {
        id: 'static-2',
        title: 'Udaan: Sports Event',
        description: 'Unleash your athletic potential at Udaan. A multi-sport event featuring Cricket, Football, Badminton, and more.',
        event_date: '2024-11-15',
        prize: 'Medals & Certificates',
        location: 'Sports Complex',
        category: 'Sports',
        max_participants: 200,
        image_url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=60'
      },
      {
        id: 'static-3',
        title: 'Code Manthan',
        description: 'The Official College Hackathon. 24 hours of coding, innovation, and building solutions for real-world problems.',
        event_date: '2024-09-20',
        prize: '₹50,000 Cash Pool',
        location: 'Auditorium',
        category: 'Technical',
        max_participants: 100,
        image_url: 'https://images.unsplash.com/photo-1504384308090-c54be3855091?w=800&auto=format&fit=crop&q=60'
      },
      {
        id: 'static-4',
        title: 'Ritambhara',
        description: 'A warm welcome to our juniors! Ritambhara is the official Fresher\'s Party for the 1st year students.',
        event_date: '2024-08-25',
        prize: 'Mr. & Ms. Fresher Titles',
        location: 'Main Hall',
        category: 'Cultural',
        max_participants: 300,
        image_url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60'
      },
      {
        id: 'static-5',
        title: 'Bachpan Reloaded',
        description: 'A grand fair held on the occasion of Children\'s Day. Relive your childhood memories with games, food stalls, and fun activities.',
        event_date: '2024-11-14',
        prize: 'Exciting Goodies',
        location: 'College Ground',
        category: 'Cultural',
        max_participants: 1000,
        image_url: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?w=800&auto=format&fit=crop&q=60',
        gallery_images: [
          'https://images.unsplash.com/photo-1570158268183-d296b2892211?w=800&auto=format&fit=crop&q=60',
          'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60'
        ]
      }
    ];

    if (error) {
      console.error('Error fetching events:', error);
      // Even if error, show static events
      setEvents(staticEvents);
    } else {
      // Merge static events with fetched events (static first for visibility)
      setEvents([...staticEvents, ...(data || [])]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleAddEventClick = () => {
    if (user) {
      setIsAddEventModalOpen(true);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <div className="text-center mb-12 relative">
        <h1 className="text-4xl font-extrabold text-primary mb-4">Upcoming Events</h1>
        <p className="text-lg text-muted-foreground">Stay tuned with the latest festivals, competitions, and cultural events.</p>

        <Button
          className="absolute top-0 right-0 hidden md:flex"
          onClick={handleAddEventClick}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </Button>
      </div>

      <div className="md:hidden flex justify-center mb-8">
        <Button onClick={handleAddEventClick}>
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </Button>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={() => setIsAddEventModalOpen(true)}
      />

      <AddEventModal
        isOpen={isAddEventModalOpen}
        onClose={() => setIsAddEventModalOpen(false)}
        onEventAdded={fetchEvents}
      />

      {events.length === 0 ? (
        <div className="text-center py-20 bg-muted/20 rounded-xl">
          <Calendar className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-semibold">No Upcoming Events</h2>
          <p className="text-muted-foreground">Check back later for exciting updates!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden hover:shadow-xl transition-shadow border-t-4 border-t-primary cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={event.image_url || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-white">
                  {event.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground mt-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(event.event_date).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-3">
                  {event.description}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                  <div className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Trophy className="w-4 h-4 mr-2 text-primary" />
                    <span className="truncate">{event.prize}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <UsersIcon className="w-4 h-4 mr-2 text-primary" />
                    <span>Max: {event.max_participants}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <EventDetailsDialog
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
};

export default Events;
