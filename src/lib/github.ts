/**
 * GitHub utilities for fetching user data and profile pictures
 */

/**
 * Extract GitHub username from GitHub URL
 * @param githubUrl - Full GitHub profile URL
 * @returns GitHub username or null if invalid URL
 */
export const extractGitHubUsername = (githubUrl: string): string | null => {
  if (!githubUrl) return null;
  
  try {
    // Handle different GitHub URL formats
    const url = new URL(githubUrl);
    if (url.hostname !== 'github.com') return null;
    
    const pathParts = url.pathname.split('/').filter(part => part.length > 0);
    
    // Should be in format: github.com/username or github.com/username/
    if (pathParts.length >= 1) {
      return pathParts[0];
    }
    
    return null;
  } catch {
    // If URL parsing fails, try regex approach
    const match = githubUrl.match(/github\.com\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  }
};

/**
 * Get GitHub profile picture URL from username
 * @param username - GitHub username
 * @param size - Image size (default: 200)
 * @returns GitHub avatar URL
 */
export const getGitHubAvatar = (username: string, size: number = 200): string => {
  if (!username) return '';
  return `https://github.com/${username}.png?size=${size}`;
};

/**
 * Fetch GitHub user data including avatar
 * @param username - GitHub username
 * @returns Promise with user data or null if not found
 */
export const fetchGitHubUserData = async (username: string): Promise<{
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
} | null> => {
  if (!username) return null;
  
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      console.warn(`GitHub user not found: ${username}`);
      return null;
    }
    
    const userData = await response.json();
    
    return {
      avatar_url: userData.avatar_url,
      name: userData.name || username,
      bio: userData.bio || '',
      public_repos: userData.public_repos || 0,
      followers: userData.followers || 0,
    };
  } catch (error) {
    console.error(`Error fetching GitHub data for ${username}:`, error);
    return null;
  }
};

/**
 * Get avatar URL from GitHub URL with fallback
 * @param githubUrl - Full GitHub profile URL
 * @param size - Image size (default: 200)
 * @returns Avatar URL or fallback placeholder
 */
export const getAvatarFromGitHubUrl = (githubUrl: string, size: number = 200): string => {
  const username = extractGitHubUsername(githubUrl);
  
  if (username) {
    return getGitHubAvatar(username, size);
  }
  
  // Fallback to a default placeholder
  return `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=${size}&h=${size}&fit=crop&crop=face`;
};