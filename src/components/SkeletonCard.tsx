const SkeletonCard = () => {
  return (
    <div className="card-modern p-6 animate-pulse">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-muted rounded-full mb-4"></div>
        <div className="h-4 bg-muted rounded w-32 mb-2"></div>
        <div className="h-3 bg-muted rounded w-24 mb-1"></div>
        <div className="h-3 bg-muted rounded w-28 mb-4"></div>
        <div className="h-12 bg-muted rounded w-full mb-4"></div>
        <div className="flex gap-2 w-full">
          <div className="h-8 bg-muted rounded flex-1"></div>
          <div className="h-8 bg-muted rounded flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;