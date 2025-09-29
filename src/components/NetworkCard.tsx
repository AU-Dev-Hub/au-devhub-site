import { Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAvatarFromGitHubUrl } from "@/lib/github";
import ImageWithFallback from "@/components/ui/image-with-fallback";

interface Member {
  id: number;
  name: string;
  department: string;
  role: string;
  bio: string;
  github: string;
  linkedin: string;
  avatar?: string; // Made optional since we'll auto-generate from GitHub
}

interface NetworkCardProps {
  member: Member;
}

const NetworkCard = ({ member }: NetworkCardProps) => {
  // Get avatar URL: use provided avatar or auto-generate from GitHub
  const avatarUrl = member.avatar || getAvatarFromGitHubUrl(member.github, 160);
  
  // Fallback avatar if GitHub avatar fails
  const fallbackAvatar = `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=face`;

  return (
    <div className="card-modern p-6 group text-center h-full flex flex-col">
      <div className="mb-4 flex-shrink-0">
        <div className="w-20 h-20 mx-auto mb-4">
          <ImageWithFallback
            src={avatarUrl}
            fallbackSrc={fallbackAvatar}
            alt={`${member.name} avatar`}
            className="w-20 h-20 rounded-full object-cover ring-2 ring-border group-hover:ring-primary transition-smooth"
          />
        </div>
        <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-smooth">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-primary mb-1">{member.role}</p>
        <p className="text-sm text-muted-foreground">{member.department}</p>
      </div>

      <div className="flex-grow flex flex-col">
        <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-grow">
          {member.bio}
        </p>

        <div className="flex items-center justify-center gap-3 mt-auto">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1 group-hover:border-primary transition-smooth"
          >
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1 group-hover:border-primary transition-smooth"
          >
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NetworkCard;