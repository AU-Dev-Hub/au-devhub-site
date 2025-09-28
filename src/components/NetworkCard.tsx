import { Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Member {
  id: number;
  name: string;
  department: string;
  role: string;
  bio: string;
  github: string;
  linkedin: string;
  avatar: string;
}

interface NetworkCardProps {
  member: Member;
}

const NetworkCard = ({ member }: NetworkCardProps) => {
  return (
    <div className="card-modern p-6 group text-center">
      <div className="mb-4">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover ring-2 ring-border group-hover:ring-primary transition-smooth"
        />
        <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-smooth">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-primary mb-1">{member.role}</p>
        <p className="text-sm text-muted-foreground">{member.department}</p>
      </div>

      <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
        {member.bio}
      </p>

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

export default NetworkCard;