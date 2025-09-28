import { Search, Filter, X, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedDepartment: string;
  onDepartmentChange: (department: string) => void;
  selectedRole: string;
  onRoleChange: (role: string) => void;
  departments: string[];
  roles: string[];
  totalMembers: number;
  filteredCount: number;
  onClearFilters: () => void;
}

const FilterBar = ({
  searchTerm,
  onSearchChange,
  selectedDepartment,
  onDepartmentChange,
  selectedRole,
  onRoleChange,
  departments,
  roles,
  totalMembers,
  filteredCount,
  onClearFilters,
}: FilterBarProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const hasActiveFilters = selectedDepartment !== "all" || selectedRole !== "all" || searchTerm.length > 0;

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search by name, department, or role..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-12 h-12 text-base bg-background border-2 focus:border-primary transition-smooth"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onSearchChange("")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-3 flex-1">
          {/* Department Filter */}
          <Select value={selectedDepartment} onValueChange={onDepartmentChange}>
            <SelectTrigger className="w-full sm:w-[180px] bg-background border-2 focus:border-primary">
              <Users className="h-4 w-4 text-muted-foreground mr-2" />
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept}>
                  {dept}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Role Filter */}
          <Select value={selectedRole} onValueChange={onRoleChange}>
            <SelectTrigger className="w-full sm:w-[180px] bg-background border-2 focus:border-primary">
              <Briefcase className="h-4 w-4 text-muted-foreground mr-2" />
              <SelectValue placeholder="All Roles" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              {roles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Counter & Clear Filters */}
        <div className="flex items-center gap-3">
          <div className="text-sm text-muted-foreground">
            Found <span className="font-semibold text-foreground">{filteredCount}</span> of{" "}
            <span className="font-semibold text-foreground">{totalMembers}</span> members
          </div>
          
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={onClearFilters}
              className="flex items-center gap-2 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/20"
            >
              <X className="h-4 w-4" />
              Clear Filters
            </Button>
          )}
        </div>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {searchTerm && (
            <Badge variant="secondary" className="flex items-center gap-1 bg-primary/10 text-primary border-primary/20">
              Search: "{searchTerm}"
              <X 
                className="h-3 w-3 cursor-pointer hover:text-destructive" 
                onClick={() => onSearchChange("")}
              />
            </Badge>
          )}
          {selectedDepartment !== "all" && (
            <Badge variant="secondary" className="flex items-center gap-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
              <Users className="h-3 w-3" />
              {selectedDepartment}
              <X 
                className="h-3 w-3 cursor-pointer hover:text-destructive" 
                onClick={() => onDepartmentChange("all")}
              />
            </Badge>
          )}
          {selectedRole !== "all" && (
            <Badge variant="secondary" className="flex items-center gap-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
              <Briefcase className="h-3 w-3" />
              {selectedRole}
              <X 
                className="h-3 w-3 cursor-pointer hover:text-destructive" 
                onClick={() => onRoleChange("all")}
              />
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterBar;