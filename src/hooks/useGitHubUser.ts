import { useState, useEffect } from 'react';
import { fetchGitHubUserData, extractGitHubUsername } from '@/lib/github';

interface GitHubUserData {
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
}

/**
 * Custom hook to fetch GitHub user data
 * @param githubUrl - GitHub profile URL
 * @returns GitHub user data, loading state, and error state
 */
export const useGitHubUser = (githubUrl: string) => {
  const [userData, setUserData] = useState<GitHubUserData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (!githubUrl) return;

      const username = extractGitHubUsername(githubUrl);
      if (!username) {
        setError('Invalid GitHub URL');
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const data = await fetchGitHubUserData(username);
        setUserData(data);
      } catch (err) {
        setError('Failed to fetch GitHub data');
        console.error('GitHub fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [githubUrl]);

  return { userData, loading, error };
};