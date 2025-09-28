import { Github, Linkedin, Mail, Heart } from "lucide-react";
import DiscordIcon from "./ui/discord-icon";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <img src="/images/logo.png" alt="AU Dev Hub" className="w-6 h-6" />
              <div className="text-lg font-semibold gradient-primary bg-clip-text text-transparent">
                AU Dev Hub
              </div>
            </div>
            <span className="text-sm text-muted-foreground">🎓 By Students, For Students</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/AU-Dev-Hub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-smooth"
              title="Contribute on GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://discord.gg/CzKTwxP7qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-smooth"
              title="Join our Discord Community"
            >
              <DiscordIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:hello@audevhub.org"
              className="text-muted-foreground hover:text-foreground transition-smooth"
              title="Send us an email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> by university students &copy; 2024 AU Dev Hub
          </p>
          <p className="mt-1">
            Empowering the next generation of developers through community and mentorship
          </p>
          <div className="mt-2 flex justify-center gap-4 text-xs">
            <a href="/events" className="hover:text-foreground transition-smooth">Learning Events</a>
            <a href="/resources" className="hover:text-foreground transition-smooth">Free Resources</a>
            <a href="/networking" className="hover:text-foreground transition-smooth">Student Network</a>
            <a href="/about" className="hover:text-foreground transition-smooth">About Us</a>
            <a href="mailto:support@audevhub.org" className="hover:text-foreground transition-smooth">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;