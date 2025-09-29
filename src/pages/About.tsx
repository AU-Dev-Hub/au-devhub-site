import { Github, Linkedin, Mail, Code2, Heart, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageWithFallback from "@/components/ui/image-with-fallback";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <ImageWithFallback 
              src="/images/logo.png" 
              alt="AU Dev Hub logo" 
              className="w-20 h-20" 
              showLoadingPlaceholder={false}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-primary bg-clip-text text-transparent">AU Dev Hub</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Empowering university students to excel in technology through community, learning, and mentorship.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="card-modern p-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              AU Dev Hub is a student-driven platform dedicated to nurturing the next generation of technology leaders.
              We believe every student, regardless of their coding background, deserves access to quality learning resources,
              mentorship, and a supportive community to help them achieve their dreams in tech.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">🎓 Student-First Approach</h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                We understand the unique challenges university students face - tight budgets, academic pressure,
                and the need for practical skills. That's why our programs are designed with students in mind.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Code2 className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Learn from Zero</h3>
                <p className="text-sm text-muted-foreground">
                  Beginner-friendly paths with hands-on projects and mentorship
                </p>
              </div>
              <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Student Network</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with peers, find study groups, and build lasting friendships
                </p>
              </div>
              <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <Github className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Real Projects</h3>
                <p className="text-sm text-muted-foreground">
                  Build portfolio projects and contribute to open source
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Maintainer Section */}
        <section className="mb-16">
          <div className="card-modern p-8">
            <div className="flex items-center gap-3 mb-8">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Community Maintainer</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <ImageWithFallback
                  src="https://avatars.githubusercontent.com/u/94890956?v=4"
                  alt="Community Maintainer avatar"
                  className="w-32 h-32 rounded-full object-cover ring-4 ring-primary/20"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Yasir Nawaz</h3>
                <p className="text-lg text-primary font-medium mb-4">
                  Developer & Tech Explorer
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Passionate about building full-stack applications, exploring IoT projects, and customizing Linux systems. I enjoy sharing knowledge and helping others grow in tech.

                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-6">
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm font-medium">
                    💡 "Every expert was once a beginner. The key is having the right support system."
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://github.com/sudoyasir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://linkedin.com/in/sudoyasir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="mailto:sudoyasir@gmail.com"
                      className="flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For New Coders Section */}
        <section className="mb-16">
          <div className="card-modern p-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="h-6 w-6 text-green-600 dark:text-green-400" />
              <h2 className="text-2xl font-bold">New to Coding? You're Welcome Here!</h2>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Every expert was once a beginner. We've all been there - staring at a blank screen,
              wondering if we'll ever understand this "coding thing." The truth is, coding is a skill
              like any other, and with the right support system, anyone can learn it.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white dark:bg-gray-800/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">💡 No Experience? No Problem!</h4>
                <p className="text-sm text-muted-foreground">
                  Our workshops start from absolute zero. We'll teach you what a variable is,
                  how to think like a programmer, and build your first projects step by step.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">🤝 Peer Support System</h4>
                <p className="text-sm text-muted-foreground">
                  Get paired with study buddies, join beginner-friendly study groups,
                  and learn alongside other students who are just starting their journey.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">🚀 Success Stories from Our Community</h4>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                "I thought coding was only for 'math people.' One year later, I'm building apps and loving it!" - Shahnawaz, AI Major
              </p>
            </div>
          </div>
        </section>

        {/* Open Source Section */}
        <section>
          <div className="card-modern p-8">
            <div className="flex items-center gap-3 mb-6">
              <Github className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Open Source & Learning by Doing</h2>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              AU Dev Hub is built by students, for students. Our platform is completely open source,
              meaning you can see how everything works and even contribute to making it better. We believe
              in transparency and learning by doing.
            </p>

            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Ways to Get Involved:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Beginners:</strong> Add events by editing <code className="bg-muted px-1 rounded">data/events.json</code> (great first contribution!)</li>
                <li>• <strong>All levels:</strong> Add your profile to <code className="bg-muted px-1 rounded">data/network.json</code></li>
                <li>• <strong>Intermediate:</strong> Help improve the website's features and design</li>
                <li>• <strong>Advanced:</strong> Mentor others and lead technical discussions</li>
              </ul>
            </div>

            <div className="mt-6 text-center">
              <Button asChild>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  Start Contributing on GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;