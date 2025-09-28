import { useState, useMemo } from 'react';

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

interface UseFilterMembersProps {
  members: Member[];
  initialDisplayCount?: number;
  loadMoreCount?: number;
}

export const useFilterMembers = ({ 
  members, 
  initialDisplayCount = 9,
  loadMoreCount = 6 
}: UseFilterMembersProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedRole, setSelectedRole] = useState("all");
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [previousDisplayCount, setPreviousDisplayCount] = useState(initialDisplayCount);

  // Get unique departments and roles
  const departments = useMemo(() => {
    return Array.from(new Set(members.map(member => member.department))).sort();
  }, [members]);

  const roles = useMemo(() => {
    return Array.from(new Set(members.map(member => member.role))).sort();
  }, [members]);

  // Filter members based on search term and selected filters
  const allFilteredMembers = useMemo(() => {
    return members.filter(member => {
      // Search filter - check name, department, role, and bio
      const matchesSearch = searchTerm === "" || 
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.bio.toLowerCase().includes(searchTerm.toLowerCase());

      // Department filter
      const matchesDepartment = selectedDepartment === "all" || 
        member.department === selectedDepartment;

      // Role filter
      const matchesRole = selectedRole === "all" || 
        member.role === selectedRole;

      return matchesSearch && matchesDepartment && matchesRole;
    });
  }, [members, searchTerm, selectedDepartment, selectedRole]);

  // Get displayed members (limited by displayCount)
  const displayedMembers = useMemo(() => {
    return allFilteredMembers.slice(0, displayCount);
  }, [allFilteredMembers, displayCount]);

  // Clear all filters and reset display count
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedDepartment("all");
    setSelectedRole("all");
    setDisplayCount(initialDisplayCount);
    setPreviousDisplayCount(initialDisplayCount);
  };

  // Quick filter functions
  const filterByDepartment = (department: string) => {
    setSelectedDepartment(department);
    setSelectedRole("all");
    setSearchTerm("");
    setDisplayCount(initialDisplayCount);
  };

  const filterByRole = (role: string) => {
    setSelectedRole(role);
    setSelectedDepartment("all");
    setSearchTerm("");
    setDisplayCount(initialDisplayCount);
  };

  // Load more function
  const loadMore = () => {
    setPreviousDisplayCount(displayCount);
    setDisplayCount(prev => prev + loadMoreCount);
  };

  // Reset to initial count when filters change
  const resetDisplayCount = () => {
    setDisplayCount(initialDisplayCount);
  };

  // Check if there are more members to load
  const hasMore = displayedMembers.length < allFilteredMembers.length;
  const canLoadMore = hasMore && displayedMembers.length > 0;

  return {
    // State
    searchTerm,
    selectedDepartment,
    selectedRole,
    displayCount,
    
    // Data
    departments,
    roles,
    filteredMembers: displayedMembers,
    allFilteredMembers,
    
    // Actions
    setSearchTerm: (term: string) => {
      setSearchTerm(term);
      setDisplayCount(initialDisplayCount);
      setPreviousDisplayCount(initialDisplayCount);
    },
    setSelectedDepartment: (dept: string) => {
      setSelectedDepartment(dept);
      setDisplayCount(initialDisplayCount);
      setPreviousDisplayCount(initialDisplayCount);
    },
    setSelectedRole: (role: string) => {
      setSelectedRole(role);
      setDisplayCount(initialDisplayCount);
      setPreviousDisplayCount(initialDisplayCount);
    },
    clearFilters,
    filterByDepartment,
    filterByRole,
    loadMore,
    resetDisplayCount,
    
    // Stats
    totalMembers: members.length,
    filteredCount: allFilteredMembers.length,
    displayedCount: displayedMembers.length,
    previousDisplayCount,
    hasMore,
    canLoadMore,
  };
};