import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  link: string;
  type: "upcoming" | "past";
  location: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="card-modern p-6 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start gap-2 mb-2">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
              {event.title}
            </h3>
            {event.title.toLowerCase().includes('beginner') || event.title.toLowerCase().includes('first') || event.title.toLowerCase().includes('zero') && (
              <span className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap self-start">
                🌱 Beginner
              </span>
            )}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
          event.type === "upcoming" 
            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
            : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
        }`}>
          {event.type === "upcoming" ? "🗓️ Upcoming" : "📚 Past Event"}
        </div>
      </div>

      <p className="text-muted-foreground mb-4 line-clamp-3">
        {event.description}
      </p>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="group-hover:border-primary transition-smooth"
        >
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            {event.type === "upcoming" ? "Register" : "View Details"}
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default EventCard;