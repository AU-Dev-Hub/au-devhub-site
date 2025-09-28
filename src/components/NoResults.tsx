import { SearchX, Users, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NoResultsProps {
  searchTerm: string;
  selectedDepartment: string;
  selectedRole: string;
  onClearFilters: () => void;
  totalMembers: number;
}

const NoResults = ({ 
  searchTerm, 
  selectedDepartment, 
  selectedRole, 
  onClearFilters,
  totalMembers 
}: NoResultsProps) => {
  const hasFilters = selectedDepartment !== "all" || selectedRole !== "all" || searchTerm.length > 0;

  return (
    <div className="text-center py-16 bg-muted/20 rounded-xl border-2 border-dashed border-muted-foreground/20">
      <SearchX className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
      
      <h3 className="text-2xl font-semibold mb-3">No Members Found</h3>
      
      {hasFilters ? (
        <div className="space-y-4">
          <p className="text-muted-foreground max-w-md mx-auto">
            No members match your current search criteria. Try adjusting your filters or search terms.
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {searchTerm && (
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20">
                Search: "{searchTerm}"
              </div>
            )}
            {selectedDepartment !== "all" && (
              <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-200 dark:border-blue-800">
                Department: {selectedDepartment}
              </div>
            )}
            {selectedRole !== "all" && (
              <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm border border-green-200 dark:border-green-800">
                Role: {selectedRole}
              </div>
            )}
          </div>
          
          <Button onClick={onClearFilters} className="btn-primary">
            <Filter className="h-4 w-4 mr-2" />
            Clear All Filters
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-muted-foreground max-w-md mx-auto">
            The community is just getting started! Be one of the first {totalMembers === 0 ? "" : "more "}members to join.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/AU-Dev-Hub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              👨‍💻 Add Your Profile on GitHub →
            </a>
            <a
              href="mailto:sudoyasir@gmail.com"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              💬 Need Help Joining? →
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoResults;