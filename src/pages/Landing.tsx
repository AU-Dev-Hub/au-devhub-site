import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Code2, BookOpen, Trophy, Lightbulb } from "lucide-react";
import DiscordIcon from "@/components/ui/discord-icon";
import SEO from "@/components/SEO";
import ImageWithFallback from "@/components/ui/image-with-fallback";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="AU Dev Hub - Air University Developers Community"
        description="Join 1,000+ student developers at Air University. Learn programming, build projects, find mentors, and kickstart your tech career. Free workshops, coding bootcamps & community support."
        keywords="Air University developers, programming community, coding bootcamp, student developers Pakistan, tech mentorship, software development learning"
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                🎓 Air University Developers Community
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Your Journey to{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Code Excellence
              </span>{" "}
              Starts Here
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Whether you're writing your first "Hello World" or building complex applications, 
              join a supportive community of student developers ready to learn, grow, and succeed together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/events" className="flex items-center gap-2">
                  Start Learning
                  <BookOpen className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-secondary">
                <Link to="/resources" className="flex items-center gap-2">
                  Free Resources
                  <Code2 className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-secondary">
                <Link to="/networking" className="flex items-center gap-2">
                  Find Your Tribe
                  <Users className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="mt-8 text-sm text-muted-foreground">
              💡 New to coding? No problem! We have resources and mentors ready to guide you.
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Join Our Developer Community?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From complete beginners to advanced developers, we provide everything you need to succeed in your coding journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-card border group hover:shadow-hover transition-smooth">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 mb-6 group-hover:bg-green-200 dark:group-hover:bg-green-800/30 transition-smooth">
                <BookOpen className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Learn at Your Pace</h3>
              <p className="text-muted-foreground">
                Beginner-friendly workshops, coding bootcamps, and study groups. Start with "Hello World" and build up to complex projects.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-card border group hover:shadow-hover transition-smooth">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/20 mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-smooth">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Find Your Community</h3>
              <p className="text-muted-foreground">
                Connect with fellow students, find study buddies, join project teams, and get mentored by senior developers.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-card border group hover:shadow-hover transition-smooth">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/20 mb-6 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/30 transition-smooth">
                <Trophy className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Achieve Your Goals</h3>
              <p className="text-muted-foreground">
                Build your portfolio, contribute to open source, land internships, and prepare for your dream tech career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from students who transformed their lives through coding
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border">
              <div className="flex items-center gap-3 mb-4">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face" 
                  alt="Student avatar" 
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">Sarah M.</h4>
                  <p className="text-sm text-muted-foreground">Computer Science Sophomore</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                "Started with zero coding experience. Thanks to the community's support and beginner workshops, 
                I just landed my first internship at a tech startup!"
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border">
              <div className="flex items-center gap-3 mb-4">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" 
                  alt="Student avatar" 
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">Alex K.</h4>
                  <p className="text-sm text-muted-foreground">Business Major → Full-Stack Dev</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                "Switched from business to tech through community events. The mentorship program 
                helped me transition careers and I'm now a developer at Google!"
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border">
              <div className="flex items-center gap-3 mb-4">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" 
                  alt="Student avatar" 
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">Marcus R.</h4>
                  <p className="text-sm text-muted-foreground">Self-taught → Open Source Contributor</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                "From struggling with basic syntax to contributing to major open source projects. 
                The community taught me that consistent learning beats talent every time."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Learning Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Follow structured paths designed for university students at every level
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Beginner</span>
                  <Lightbulb className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">First Steps</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Programming fundamentals</li>
                  <li>• Version control (Git)</li>
                  <li>• First programming language</li>
                  <li>• Building simple projects</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Intermediate</span>
                  <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Building Skills</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Web development frameworks</li>
                  <li>• Database fundamentals</li>
                  <li>• API development</li>
                  <li>• Testing and debugging</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Advanced</span>
                  <Trophy className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Career Ready</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• System design</li>
                  <li>• Open source contributions</li>
                  <li>• Technical interviews</li>
                  <li>• Leadership & mentoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Thriving Community
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with like-minded developers, get help when you're stuck, and celebrate your wins together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Discord Community */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl border border-indigo-200 dark:border-indigo-800 text-center group hover:shadow-lg transition-smooth">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/40 mb-6 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/60 transition-smooth">
                <DiscordIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Discord Community</h3>
              <p className="text-muted-foreground mb-6">
                Join our active Discord server with 24/7 help channels, study rooms, project showcases, and daily coding discussions. Get instant help and make lasting friendships!
              </p>
              <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                <li>💬 Real-time coding help & support</li>
                <li>🎮 Fun coding challenges & games</li>
                <li>📚 Study groups & pair programming</li>
                <li>🎉 Celebrate your coding milestones</li>
              </ul>
              <Button asChild size="lg" className="btn-primary">
                <a href="https://discord.gg/CzKTwxP7qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Join Discord
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* GitHub Community */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 p-8 rounded-xl border border-gray-200 dark:border-gray-800 text-center group hover:shadow-lg transition-smooth">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-900/40 mb-6 group-hover:bg-gray-200 dark:group-hover:bg-gray-800/60 transition-smooth">
                <Code2 className="h-8 w-8 text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Open Source Hub</h3>
              <p className="text-muted-foreground mb-6">
                Contribute to real projects, build your portfolio, and collaborate with fellow students on GitHub. Perfect for beginners and experienced developers alike!
              </p>
              <ul className="text-sm text-muted-foreground mb-6 space-y-2">
                <li>🚀 Beginner-friendly projects</li>
                <li>🤝 Collaborative development</li>
                <li>📊 Build your GitHub profile</li>
                <li>🏆 Gain real-world experience</li>
              </ul>
              <Button asChild variant="outline" size="lg" className="btn-secondary">
                <a href="https://github.com/AU-Dev-Hub" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Explore Projects
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card p-6 rounded-xl border shadow-sm max-w-sm sm:max-w-none mx-auto">
              <div className="flex -space-x-2 flex-shrink-0">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" 
                  alt="Community member avatar" 
                  className="w-10 h-10 rounded-full border-2 border-background object-cover flex-shrink-0"
                  showLoadingPlaceholder={false}
                />
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
                  alt="Community member avatar" 
                  className="w-10 h-10 rounded-full border-2 border-background object-cover flex-shrink-0"
                  showLoadingPlaceholder={false}
                />
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                  alt="Community member avatar" 
                  className="w-10 h-10 rounded-full border-2 border-background object-cover flex-shrink-0"
                  showLoadingPlaceholder={false}
                />
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground border-2 border-background flex items-center justify-center text-sm font-medium flex-shrink-0">
                  +1K
                </div>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-semibold">Join 1,000+ student developers</p>
                <p className="text-sm text-muted-foreground">Your coding journey starts with community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-subtle">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join over 1,000+ students who are already building their future in tech. 
            No experience required – just bring your curiosity!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/events" className="flex items-center gap-2">
                Explore Learning Events
                <Calendar className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-secondary">
              <Link to="/resources" className="flex items-center gap-2">
                Free Learning Resources
                <BookOpen className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="mt-6 text-sm text-muted-foreground">
            🚀 First workshop is always free for new members!
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;