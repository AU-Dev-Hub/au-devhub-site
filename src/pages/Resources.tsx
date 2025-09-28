import { Book, Code, Video, ExternalLink, Users, Trophy, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const learningPaths = [
    {
      title: "Complete Beginner",
      description: "Never coded before? Start here!",
      color: "green",
      resources: [
        { name: "freeCodeCamp", url: "https://freecodecamp.org", type: "Course" },
        { name: "Codecademy Intro to Programming", url: "https://codecademy.com", type: "Interactive" },
        { name: "CS50's Introduction to Computer Science", url: "https://cs50.harvard.edu", type: "Video Course" }
      ]
    },
    {
      title: "Web Development",
      description: "Build websites and web applications",
      color: "blue",
      resources: [
        { name: "The Odin Project", url: "https://theodinproject.com", type: "Full Stack" },
        { name: "MDN Web Docs", url: "https://developer.mozilla.org", type: "Documentation" },
        { name: "React Documentation", url: "https://react.dev", type: "Framework" }
      ]
    },
    {
      title: "Mobile Development",
      description: "Create iOS and Android apps",
      color: "purple",
      resources: [
        { name: "React Native", url: "https://reactnative.dev", type: "Cross Platform" },
        { name: "Flutter", url: "https://flutter.dev", type: "Cross Platform" },
        { name: "Swift Playgrounds", url: "https://developer.apple.com/swift-playgrounds/", type: "iOS" }
      ]
    }
  ];

  const studentTools = [
    {
      name: "GitHub Student Pack",
      description: "Free developer tools and services for students",
      url: "https://education.github.com/pack",
      category: "Essential"
    },
    {
      name: "Figma Education",
      description: "Free design tools for UI/UX design",  
      url: "https://figma.com/education",
      category: "Design"
    },
    {
      name: "JetBrains Student License",
      description: "Professional IDEs free for students",
      url: "https://jetbrains.com/student",
      category: "Development"
    },
    {
      name: "Notion Education",
      description: "Note-taking and project management",
      url: "https://notion.so/education",
      category: "Productivity"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Student <span className="gradient-primary bg-clip-text text-transparent">Resources</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Curated learning resources, free tools, and study guides specifically chosen for university students.
            From complete beginner to job-ready developer.
          </p>
        </div>

        {/* Learning Paths */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Book className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Learning Paths</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div key={index} className={`card-modern p-6 border-l-4 ${
                path.color === 'green' ? 'border-l-green-500' :
                path.color === 'blue' ? 'border-l-blue-500' : 'border-l-purple-500'
              }`}>
                <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
                <p className="text-muted-foreground mb-4">{path.description}</p>
                
                <div className="space-y-3">
                  {path.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-sm">{resource.name}</h4>
                        <p className="text-xs text-muted-foreground">{resource.type}</p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Student Tools */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Free Student Tools</h2>
            <span className="ml-auto bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
              100% Free
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {studentTools.map((tool, index) => (
              <div key={index} className="card-modern p-6 group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-smooth">
                    {tool.name}
                  </h3>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                    {tool.category}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                <Button variant="outline" asChild className="w-full group-hover:border-primary transition-smooth">
                  <a href={tool.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Get Free Access
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Study Tips */}
        <section className="mb-16">
          <div className="card-modern p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold">Study Tips from Successful Students</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">🎯 Effective Learning</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Code along with tutorials, don't just watch</li>
                  <li>• Build projects outside of class assignments</li>
                  <li>• Join study groups and explain concepts to others</li>
                  <li>• Use the 25-5 Pomodoro technique for focused coding</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-indigo-600 dark:text-indigo-400">🚀 Career Preparation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Start building your GitHub portfolio early</li>
                  <li>• Contribute to open source projects</li>
                  <li>• Practice coding interviews regularly</li>
                  <li>• Network with professionals and alumni</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Community Call to Action */}
        <section className="text-center py-12 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-xl border">
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-4">Have a Great Resource to Share?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Know of an amazing free course, tool, or learning resource that helped you? 
            Help your fellow students by suggesting it to our community!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <a href="mailto:resources@audevhub.org" className="flex items-center gap-2">
                📝 Suggest a Resource
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/networking" className="flex items-center gap-2">
                💬 Ask the Community
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;