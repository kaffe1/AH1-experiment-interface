export interface VideoStimulus {
  id: string;
  url: string;
  duration: number; // in seconds
}

// Generate 64 mock videos
// const videoSrc = [
//   "public/video/demo_video1-1.mp4",
//   "public/video/demo_video2-1.mp4",
//   "public/video/demo_video3-1.mp4",
//   "public/video/demo_video4-1.mp4",
//   "public/video/demo_video4-1.mp4",
// ];
const videoSrc = [
  "/video/demo_video1-1.mp4",
  "/video/demo_video2-1.mp4",
  "/video/demo_video3-1.mp4",
  "/video/demo_video4-1.mp4",
  "/video/demo_video4-1.mp4",
];

const shuffledVideos = [...videoSrc].sort(() => Math.random() - 0.5);
export const videos: VideoStimulus[] = Array.from({ length: 5 }, (_, i) => ({
  id: `video-${i + 1}`,
  // Using a sample video from MDN for demonstration purposes
  // In a real app, these would be different URLs

  url: shuffledVideos[i],
  duration: 15,
}));
