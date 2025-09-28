import { Github, Linkedin, Star, GitFork, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAvatarFromGitHubUrl } from "@/lib/github";
import { useGitHubUser } from "@/hooks/useGitHubUser";
import ImageWithFallback from "@/components/ui/image-with-fallback";

interface Member {
  id: number;
  name: string;
  department: string;
  role: string;
  bio: string;
  github: string;
  linkedin: string;
  avatar?: string;
}

interface EnhancedNetworkCardProps {
  member: Member;
  showGitHubStats?: boolean;
}

const EnhancedNetworkCard = ({ member, showGitHubStats = false }: EnhancedNetworkCardProps) => {
  // Fetch GitHub data if stats are requested
  const { userData: githubData, loading: githubLoading } = useGitHubUser(
    showGitHubStats ? member.github : ''
  );

  // Get avatar URL: use provided avatar or auto-generate from GitHub
  const avatarUrl = member.avatar || getAvatarFromGitHubUrl(member.github, 160);
  
  // Fallback avatar if GitHub avatar fails
  const fallbackAvatar = `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=face`;

  return (
    <div className="card-modern p-6 group text-center">
      <div className="mb-4">
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

      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
        {member.bio}
      </p>

      {/* GitHub Stats */}
      {showGitHubStats && githubData && !githubLoading && (
        <div className="flex items-center justify-center gap-4 mb-4 p-2 bg-muted/30 rounded-lg">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <GitFork className="h-3 w-3" />
            <span>{githubData.public_repos}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Users className="h-3 w-3" />
            <span>{githubData.followers}</span>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center gap-3">
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
  );
};

export default EnhancedNetworkCard;