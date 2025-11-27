export interface VideoStimulus {
  id: string;
  url: string;
  duration: number; // in seconds
}

// Generate 64 mock videos
export const videos: VideoStimulus[] = Array.from({ length: 5 }, (_, i) => ({
  id: `video-${i + 1}`,
  // Using a sample video from MDN for demonstration purposes
  // In a real app, these would be different URLs
  url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  duration: 15,
}));
