# GitHub Profile Picture Integration

## Overview
The AU Dev Hub website now automatically fetches and displays GitHub profile pictures for community members. When a student adds their GitHub URL to the `network.json` file, their profile picture will be automatically loaded from GitHub.

## How It Works

### 1. **Automatic Avatar Generation**
- When a member's profile is loaded, the system extracts the GitHub username from their GitHub URL
- It then generates the GitHub avatar URL using: `https://github.com/{username}.png?size=160`
- The profile picture is automatically displayed in the NetworkCard component

### 2. **Fallback System**
- If the GitHub profile picture fails to load, a default placeholder image is used
- Loading states are handled with skeleton animations
- Error states gracefully fall back to generic avatars

### 3. **Enhanced Features**
- **EnhancedNetworkCard**: Optional component that can also display GitHub stats (repositories count, followers)
- **GitHub Data Hook**: `useGitHubUser` hook for fetching additional GitHub profile data
- **Utility Functions**: Helper functions for GitHub URL parsing and avatar generation

## Usage

### Basic Implementation (Current)
```json
// public/network.json
{
  "members": [
    {
      "id": 1,
      "name": "John Doe",
      "department": "Computer Science", 
      "role": "Full Stack Developer",
      "bio": "Love coding and helping other students learn!",
      "github": "https://github.com/johndoe",
      "linkedin": "https://linkedin.com/in/johndoe"
      // No need to specify "avatar" - it's auto-generated from GitHub!
    }
  ]
}
```

### Advanced Implementation with GitHub Stats
```tsx
// Use EnhancedNetworkCard instead of NetworkCard
import EnhancedNetworkCard from "@/components/EnhancedNetworkCard";

<EnhancedNetworkCard 
  member={member} 
  showGitHubStats={true} // Shows repos count and followers
/>
```

## Adding New Students

### For Students:
1. Add your profile to `public/network.json`
2. Include your GitHub URL in the correct format: `https://github.com/yourusername`
3. Your profile picture will automatically appear from your GitHub profile

### Supported GitHub URL Formats:
- `https://github.com/username`
- `https://github.com/username/`
- `http://github.com/username` (redirects to https)

### GitHub Username Extraction:
The system can handle various GitHub URL formats and will extract the username automatically.

## Technical Implementation

### Files Created/Modified:
- `src/lib/github.ts` - GitHub utility functions
- `src/hooks/useGitHubUser.ts` - React hook for GitHub data
- `src/components/NetworkCard.tsx` - Updated to use GitHub avatars
- `src/components/EnhancedNetworkCard.tsx` - Advanced version with stats
- `public/network.json` - Updated structure (avatar field now optional)

### Key Functions:
- `extractGitHubUsername(url)` - Extract username from GitHub URL
- `getGitHubAvatar(username, size)` - Generate GitHub avatar URL
- `fetchGitHubUserData(username)` - Fetch full GitHub profile data
- `getAvatarFromGitHubUrl(url, size)` - One-step avatar URL generation

## Benefits

1. **Automatic Updates**: Profile pictures update automatically when students change their GitHub avatars
2. **No Manual Work**: No need to upload or manage profile pictures separately
3. **Consistent Quality**: All profile pictures are the same size and format
4. **Real GitHub Profiles**: Encourages students to maintain professional GitHub profiles
5. **Enhanced Community**: Easy to see who's active on GitHub and connect with other developers

## Error Handling

- **Invalid GitHub URLs**: Falls back to placeholder images
- **Network Errors**: Graceful fallback with loading states
- **Missing GitHub Profiles**: Uses default placeholder avatars
- **Rate Limiting**: GitHub API calls are minimal and cached by browsers

## Future Enhancements

1. **GitHub Stats Integration**: Show repository count, followers, etc.
2. **Contribution Graphs**: Display GitHub contribution activity
3. **Repository Showcases**: Feature student projects from GitHub
4. **GitHub OAuth**: Allow students to connect their profiles directly
5. **Activity Feed**: Show recent GitHub activity from community members