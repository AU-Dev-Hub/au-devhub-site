import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, Sparkles } from "lucide-react";

interface QuickFiltersProps {
  departments: string[];
  roles: string[];
  onDepartmentClick: (department: string) => void;
  onRoleClick: (role: string) => void;
  selectedDepartment: string;
  selectedRole: string;
}

const QuickFilters = ({
  departments,
  roles,
  onDepartmentClick,
  onRoleClick,
  selectedDepartment,
  selectedRole,
}: QuickFiltersProps) => {
  return (
    <div className="space-y-4 p-4 bg-muted/20 rounded-lg border">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="h-4 w-4 text-primary" />
        <h3 className="text-sm font-semibold">Quick Filters</h3>
      </div>
      
      {/* Department Quick Filters */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Users className="h-3 w-3 text-muted-foreground" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Departments
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {departments.map((dept) => (
            <Badge
              key={dept}
              variant={selectedDepartment === dept ? "default" : "secondary"}
              className={`cursor-pointer transition-smooth hover:scale-105 ${
                selectedDepartment === dept
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "hover:bg-primary/10 hover:text-primary hover:border-primary/20"
              }`}
              onClick={() => onDepartmentClick(dept === selectedDepartment ? "all" : dept)}
            >
              {dept}
            </Badge>
          ))}
        </div>
      </div>

      {/* Role Quick Filters */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Briefcase className="h-3 w-3 text-muted-foreground" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Roles
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {roles.map((role) => (
            <Badge
              key={role}
              variant={selectedRole === role ? "default" : "secondary"}
              className={`cursor-pointer transition-smooth hover:scale-105 ${
                selectedRole === role
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "hover:bg-primary/10 hover:text-primary hover:border-primary/20"
              }`}
              onClick={() => onRoleClick(role === selectedRole ? "all" : role)}
            >
              {role}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickFilters;