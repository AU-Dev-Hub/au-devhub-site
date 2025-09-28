// Utility to create simple fallback images
export const createPlaceholderImage = (width: number, height: number, text: string, bgColor = '#f3f4f6', textColor = '#6b7280') => {
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" fill="none">
      <rect width="${width}" height="${height}" fill="${bgColor}"/>
      <text x="50%" y="50%" font-family="system-ui, -apple-system, sans-serif" font-size="${Math.min(width, height) * 0.1}" font-weight="500" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
    </svg>
  `)}`;
};

export const createAvatarPlaceholder = (size: number, initials: string) => {
  const colors = [
    { bg: '#3b82f6', text: '#ffffff' }, // blue
    { bg: '#10b981', text: '#ffffff' }, // green  
    { bg: '#f59e0b', text: '#ffffff' }, // yellow
    { bg: '#ef4444', text: '#ffffff' }, // red
    { bg: '#8b5cf6', text: '#ffffff' }, // purple
    { bg: '#06b6d4', text: '#ffffff' }, // cyan
  ];
  
  // Simple hash function to pick consistent color for same initials
  const hash = initials.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const colorIndex = hash % colors.length;
  const color = colors[colorIndex];
  
  return createPlaceholderImage(size, size, initials, color.bg, color.text);
};

export const defaultAvatarPlaceholder = (size: number = 160) => {
  return createAvatarPlaceholder(size, '👤');
};

export const defaultLogoPlaceholder = (size: number = 100) => {
  return createPlaceholderImage(size, size, 'AU\nDEV\nHUB', '#3b82f6', '#ffffff');
};