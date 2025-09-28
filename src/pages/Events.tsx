import { useEffect, useState } from "react";
import EventCard from "@/components/EventCard";
import { Calendar, Clock } from "lucide-react";
import SEO from "@/components/SEO";

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

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/events.json');
        const data = await response.json();
        setEvents(data.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading events...</p>
          </div>
        </div>
      </div>
    );
  }

  const upcomingEvents = events.filter(event => event.type === "upcoming");
  const pastEvents = events.filter(event => event.type === "past");

  return (
    <div className="min-h-screen py-20">
      <SEO 
        title="Learning Events - AU Dev Hub"
        description="Join hands-on coding workshops, bootcamps, and tech talks at Air University. Free programming events for students to learn web development, mobile apps, AI, and more."
        keywords="coding workshops Air University, programming bootcamp Pakistan, tech events students, web development workshop, mobile app development, AI machine learning events"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Learning <span className="gradient-primary bg-clip-text text-transparent">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover workshops, bootcamps, and study sessions designed specifically for university students. 
            From "first time coding" to advanced project builds.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded-full text-sm">
              🌱 Beginner Friendly
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-full text-sm">
              🎓 Student Focused
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 rounded-full text-sm">
              💰 Free for Students
            </span>
          </div>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Upcoming Learning Events</h2>
            <span className="ml-auto bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
              Free Registration
            </span>
          </div>
          
          {upcomingEvents.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted/30 rounded-xl">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Upcoming Events</h3>
              <p className="text-muted-foreground">Check back soon for new learning opportunities!</p>
            </div>
          )}
        </section>

        {/* Past Events */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Clock className="h-6 w-6 text-muted-foreground" />
            <h2 className="text-2xl md:text-3xl font-bold">Past Events</h2>
          </div>
          
          {pastEvents.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted/30 rounded-xl">
              <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Past Events</h3>
              <p className="text-muted-foreground">Events will appear here after they occur.</p>
            </div>
          )}
        </section>

        {/* Student Organizers CTA */}
        <section className="mt-16 text-center py-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border">
          <h3 className="text-xl font-semibold mb-4">Want to Organize an Event?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Students can organize their own workshops, study groups, or coding bootcamps! 
            We provide support, resources, and help you reach the community. 
            Add events by editing the <code className="mx-1 px-2 py-1 bg-muted rounded text-sm">events.json</code> file.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              📝 Add Your Event on GitHub →
            </a>
            <a
              href="mailto:events@audevhub.org"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              💬 Get Event Planning Help →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;