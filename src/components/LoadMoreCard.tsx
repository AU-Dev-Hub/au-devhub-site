import { Plus, Users, ArrowDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface LoadMoreCardProps {
  onLoadMore: () => void;
  remainingCount: number;
  loadMoreCount: number;
}

const LoadMoreCard = ({ onLoadMore, remainingCount, loadMoreCount }: LoadMoreCardProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const nextBatchSize = Math.min(loadMoreCount, remainingCount);

  const handleLoadMore = async () => {
    setIsLoading(true);
    
    // Add a small delay to show loading state and make the experience feel more natural
    await new Promise(resolve => setTimeout(resolve, 300));
    
    onLoadMore();
    setIsLoading(false);
  };

  return (
    <div className="card-modern p-6 group text-center bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-dashed border-primary/20 hover:border-primary/40 transition-smooth cursor-pointer">
      <div className="mb-4">
        <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
          {isLoading ? (
            <Loader2 className="h-8 w-8 text-primary animate-spin" />
          ) : (
            <Plus className="h-8 w-8 text-primary group-hover:scale-110 transition-smooth" />
          )}
        </div>
        <h3 className="text-xl font-semibold mb-1 text-primary">
          Load More Members
        </h3>
        <p className="text-sm font-medium text-muted-foreground mb-1">
          {remainingCount} more members
        </p>
        <p className="text-sm text-muted-foreground">
          Click to see {nextBatchSize} more
        </p>
      </div>

      <div className="text-muted-foreground text-sm mb-6 flex items-center justify-center gap-2">
        <Users className="h-4 w-4" />
        <span>Discover more amazing developers</span>
      </div>

      <Button 
        onClick={handleLoadMore}
        disabled={isLoading}
        className="w-full btn-primary group-hover:shadow-lg transition-smooth disabled:opacity-70"
        size="lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Loading...
          </>
        ) : (
          <>
            <ArrowDown className="h-4 w-4 mr-2 group-hover:translate-y-1 transition-smooth" />
            Show {nextBatchSize} More
          </>
        )}
      </Button>

      <div className="mt-4 text-xs text-muted-foreground">
        {remainingCount} remaining of {remainingCount + nextBatchSize} total
      </div>
    </div>
  );
};

export default LoadMoreCard;