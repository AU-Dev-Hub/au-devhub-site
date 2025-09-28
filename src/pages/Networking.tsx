import { useEffect, useState } from "react";
import NetworkCard from "@/components/NetworkCard";
import AnimatedNetworkCard from "@/components/AnimatedNetworkCard";
import FilterBar from "@/components/FilterBar";
import NoResults from "@/components/NoResults";
import LoadMoreCard from "@/components/LoadMoreCard";
import { useFilterMembers } from "@/hooks/useFilterMembers";
import SEO from "@/components/SEO";
import { Users, Github, Filter } from "lucide-react";

interface Member {
  id: number;
  name: string;
  department: string;
  role: string;
  bio: string;
  github: string;
  linkedin: string;
  avatar?: string; // Optional since we auto-generate from GitHub
}

const Networking = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

    // Initialize filtering hook with pagination
  const {
    searchTerm,
    selectedDepartment,
    selectedRole,
    departments,
    roles,
    filteredMembers,
    allFilteredMembers,
    setSearchTerm,
    setSelectedDepartment,
    setSelectedRole,
    clearFilters,
    filterByDepartment,
    filterByRole,
    loadMore,
    totalMembers,
    filteredCount,
    displayedCount,
    previousDisplayCount,
    hasMore,
    canLoadMore,
  } = useFilterMembers({ 
    members, 
    initialDisplayCount: 9, 
    loadMoreCount: 6 
  });

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('/data/network.json');
        const data = await response.json();
        setMembers(data.members);
      } catch (error) {
        console.error('Error fetching network members:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading community members...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <SEO 
        title="Student Community - AU Dev Hub"
        description="Connect with fellow student developers at Air University. Find study partners, join project teams, and discover mentors. Search by department, role, or name to find your coding community."
        keywords="student developers Air University, programming community Pakistan, coding study partners, tech mentorship, software development students, computer science networking"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Student <span className="gradient-primary bg-clip-text text-transparent">Community</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet fellow student developers, find study buddies, join project teams, and connect with mentors. 
            Your coding journey is better with friends!
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-full text-sm">
              🤝 Study Partners
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded-full text-sm">
              👥 Project Teams
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 rounded-full text-sm">
              🎯 Mentorship
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{totalMembers}</div>
            <div className="text-sm text-muted-foreground">Student Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{departments.length}</div>
            <div className="text-sm text-muted-foreground">Study Areas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{roles.length}</div>
            <div className="text-sm text-muted-foreground">Different Roles</div>
          </div>
        </div>



        {/* Members Grid */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Student Community</h2>
          </div>

          {/* Filter Bar */}
          {!loading && members.length > 0 && (
            <div className="mb-8">
              <FilterBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                selectedDepartment={selectedDepartment}
                onDepartmentChange={setSelectedDepartment}
                selectedRole={selectedRole}
                onRoleChange={setSelectedRole}
                departments={departments}
                roles={roles}
                totalMembers={totalMembers}
                filteredCount={filteredCount}
                onClearFilters={clearFilters}
              />
            </div>
          )}
          
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="card-modern p-6 animate-pulse">
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
              ))}
            </div>
          ) : filteredMembers.length > 0 ? (
            <div className="animate-in fade-in duration-300">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
                {filteredMembers.map((member, index) => {
                  const isNew = index >= previousDisplayCount;
                  const animationDelay = isNew ? (index - previousDisplayCount) * 100 : 0;
                  
                  return (
                    <AnimatedNetworkCard 
                      key={member.id} 
                      member={member} 
                      delay={animationDelay}
                      isNew={isNew}
                    />
                  );
                })}
                {canLoadMore && (
                  <div className="transition-all duration-500 ease-out">
                    <LoadMoreCard 
                      onLoadMore={loadMore}
                      remainingCount={filteredCount - displayedCount}
                      loadMoreCount={6}
                    />
                  </div>
                )}
              </div>
              
              {/* Show all results info */}
              <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{displayedCount}</span> of{" "}
                  <span className="font-semibold text-foreground">{filteredCount}</span> members
                  {hasMore && (
                    <span className="text-primary ml-2">
                      • {filteredCount - displayedCount} more available
                    </span>
                  )}
                </p>
              </div>
            </div>
          ) : (
            <NoResults
              searchTerm={searchTerm}
              selectedDepartment={selectedDepartment}
              selectedRole={selectedRole}
              onClearFilters={clearFilters}
              totalMembers={totalMembers}
            />
          )}
        </section>

        {/* Join Community CTA */}
        <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border">
          <Github className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-4">Join Our Student Network</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to connect with fellow student developers? Add your profile to our community! 
            Edit the <code className="mx-1 px-2 py-1 bg-muted rounded text-sm">network.json</code> file 
            or reach out to us for help getting started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              👨‍💻 Add Your Profile on GitHub →
            </a>
            <a
              href="mailto:community@audevhub.org"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              💬 Need Help Joining? →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Networking;