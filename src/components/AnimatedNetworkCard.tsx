import { useState, useEffect } from "react";
import NetworkCard from "./NetworkCard";

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

interface AnimatedNetworkCardProps {
  member: Member;
  delay?: number;
  isNew?: boolean;
}

const AnimatedNetworkCard = ({ member, delay = 0, isNew = false }: AnimatedNetworkCardProps) => {
  const [isVisible, setIsVisible] = useState(!isNew);

  useEffect(() => {
    if (isNew) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isNew, delay]);

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-95"
      }`}
      style={{
        transitionDelay: isNew ? `${delay}ms` : "0ms",
      }}
    >
      <NetworkCard member={member} />
    </div>
  );
};

export default AnimatedNetworkCard;