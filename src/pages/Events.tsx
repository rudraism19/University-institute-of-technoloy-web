import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Calendar, MapPin, Trophy, Users as UsersIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('event_date', { ascending: true });

      if (error) {
        console.error('Error fetching events:', error);
      } else {
        setEvents(data || []);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-primary mb-4">Upcoming Events</h1>
        <p className="text-lg text-muted-foreground">Stay tuned with the latest festivals, competitions, and cultural events.</p>
      </div>

      {events.length === 0 ? (
        <div className="text-center py-20 bg-muted/20 rounded-xl">
          <Calendar className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-semibold">No Upcoming Events</h2>
          <p className="text-muted-foreground">Check back later for exciting updates!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-shadow border-t-4 border-t-primary">
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
    </div>
  );
};

export default Events;
