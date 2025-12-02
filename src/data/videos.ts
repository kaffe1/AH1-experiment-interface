export interface VideoStimulus {
  id: string;
  url: string;
  duration: number; // in seconds
}

export const videoSrc = [
  // Section for AI fitted videos (corresponding to 'ai_fitted' folder)
  {
    ai_fitted: [
      { url: "/video/ai_fitted/af-ch05-11.mp4", idPrefix: "af" },
      { url: "/video/ai_fitted/af-ch05-12.mp4", idPrefix: "af" },
      { url: "/video/ai_fitted/af-ch08-15.mp4", idPrefix: "af" },
      { url: "/video/ai_fitted/af-ch08-16.mp4", idPrefix: "af" },
      { url: "/video/ai_fitted/af-ch12-1.mp4", idPrefix: "af" },
      { url: "/video/ai_fitted/af-ch12-2.mp4", idPrefix: "af" },
      { url: "/video/ai_fitted/af-ch14-3.mp4", idPrefix: "af" },
      { url: "/video/ai_fitted/af-ch14-4.mp4", idPrefix: "af" },
      { url: "/video/ai_fitted/af-ch15-9.mp4", idPrefix: "af" },
      { url: "/video/ai_fitted/af-ch15-10.mp4", idPrefix: "af" },
      { url: "/video/ai_fitted/af-ch17-5.mp4", idPrefix: "af" },
      { url: "/video/ai_fitted/af-ch17-6.mp4", idPrefix: "af" },
      { url: "/video/ai_fitted/af-ch31-7.mp4", idPrefix: "af" },
      { url: "/video/ai_fitted/af-ch31-8.mp4", idPrefix: "af" },
      { url: "/video/ai_fitted/af-ch33-13.mp4", idPrefix: "af" },
      { url: "/video/ai_fitted/af-ch33-14.mp4", idPrefix: "af" },
    ],
  },
  // Section for AI unfitted videos (corresponding to 'au_unfitted' folder)
  {
    ai_unfitted: [
      { url: "/video/ai_unfitted/au-ch05-11.mp4", idPrefix: "au" },
      { url: "/video/ai_unfitted/au-ch05-12.mp4", idPrefix: "au" },
      { url: "/video/ai_unfitted/au-ch08-15.mp4", idPrefix: "au" },
      { url: "/video/ai_unfitted/au-ch08-16.mp4", idPrefix: "au" },
      { url: "/video/ai_unfitted/au-ch12-1.mp4", idPrefix: "au" },
      { url: "/video/ai_unfitted/au-ch12-2.mp4", idPrefix: "au" },
      { url: "/video/ai_unfitted/au-ch14-3.mp4", idPrefix: "au" },
      { url: "/video/ai_unfitted/au-ch14-4.mp4", idPrefix: "au" },
      { url: "/video/ai_unfitted/au-ch15-9.mp4", idPrefix: "au" },
      { url: "/video/ai_unfitted/au-ch15-10.mp4", idPrefix: "au" },
      { url: "/video/ai_unfitted/au-ch17-5.mp4", idPrefix: "au" },
      { url: "/video/ai_unfitted/au-ch17-6.mp4", idPrefix: "au" },
      { url: "/video/ai_unfitted/au-ch31-7.mp4", idPrefix: "au" },
      { url: "/video/ai_unfitted/au-ch31-8.mp4", idPrefix: "au" },
      { url: "/video/ai_unfitted/au-ch33-13.mp4", idPrefix: "au" },
      { url: "/video/ai_unfitted/au-ch33-14.mp4", idPrefix: "au" },
    ],
  },
  // Section for Human fitted videos (corresponding to 'human_fitted' folder)
  {
    human_fitted: [
      { url: "/video/human_fitted/hf-ch05-11.mp4", idPrefix: "hf" },
      { url: "/video/human_fitted/hf-ch05-12.mp4", idPrefix: "hf" },
      { url: "/video/human_fitted/hf-ch08-15.mp4", idPrefix: "hf" }, // Note: assuming hf-ch08-15.mp4 from original code structure, though not visible on screenshot
      { url: "/video/human_fitted/hf-ch08-16.mp4", idPrefix: "hf" },
      { url: "/video/human_fitted/hf-ch12-1.mp4", idPrefix: "hf" },
      { url: "/video/human_fitted/hf-ch12-2.mp4", idPrefix: "hf" },
      { url: "/video/human_fitted/hf-ch14-3.mp4", idPrefix: "hf" },
      { url: "/video/human_fitted/hf-ch14-4.mp4", idPrefix: "hf" },
      { url: "/video/human_fitted/hf-ch15-9.mp4", idPrefix: "hf" },
      { url: "/video/human_fitted/hf-ch15-10.mp4", idPrefix: "hf" },
      { url: "/video/human_fitted/hf-ch17-5.mp4", idPrefix: "hf" },
      { url: "/video/human_fitted/hf-ch17-6.mp4", idPrefix: "hf" },
      { url: "/video/human_fitted/hf-ch31-7.mp4", idPrefix: "hf" },
      { url: "/video/human_fitted/hf-ch31-8.mp4", idPrefix: "hf" },
      { url: "/video/human_fitted/hf-ch33-13.mp4", idPrefix: "hf" },
      { url: "/video/human_fitted/hf-ch33-14.mp4", idPrefix: "hf" },
    ],
  },
  // Section for Human unfitted videos (corresponding to 'human_unfitted' folder)
  {
    human_unfitted: [
      { url: "/video/human_unfitted/hu-ch05-11.mp4", idPrefix: "hu" },
      { url: "/video/human_unfitted/hu-ch05-12.mp4", idPrefix: "hu" },
      { url: "/video/human_unfitted/hu-ch08-15.mp4", idPrefix: "hu" }, // Note: assuming hu-ch08-15.mp4 from original code structure, though not visible on screenshot
      { url: "/video/human_unfitted/hu-ch08-16.mp4", idPrefix: "hu" },
      { url: "/video/human_unfitted/hu-ch12-1.mp4", idPrefix: "hu" },
      { url: "/video/human_unfitted/hu-ch12-2.mp4", idPrefix: "hu" },
      { url: "/video/human_unfitted/hu-ch14-3.mp4", idPrefix: "hu" },
      { url: "/video/human_unfitted/hu-ch14-4.mp4", idPrefix: "hu" },
      { url: "/video/human_unfitted/hu-ch15-9.mp4", idPrefix: "hu" },
      { url: "/video/human_unfitted/hu-ch15-10.mp4", idPrefix: "hu" },
      { url: "/video/human_unfitted/hu-ch17-5.mp4", idPrefix: "hu" },
      { url: "/video/human_unfitted/hu-ch17-6.mp4", idPrefix: "hu" },
      { url: "/video/human_unfitted/hu-ch31-7.mp4", idPrefix: "hu" },
      { url: "/video/human_unfitted/hu-ch31-8.mp4", idPrefix: "hu" },
      { url: "/video/human_unfitted/hu-ch33-13.mp4", idPrefix: "hu" },
      { url: "/video/human_unfitted/hu-ch33-14.mp4", idPrefix: "hu" },
    ],
  },
];

// Process the video source array to create the final stimulus list
const unshuffledVideos: VideoStimulus[] = videoSrc.flatMap((group) => {
  const [key, videos] = Object.entries(group)[0];

  return videos.map((v: any) => {
    const fullFileName = v.url.substring(v.url.lastIndexOf("/") + 1);
    const fileNameWithoutExtension = fullFileName.substring(
      0,
      fullFileName.lastIndexOf(".")
    );
    return {
      id: fileNameWithoutExtension,
      url: v.url,
      duration: 15, // Use default duration of 15 seconds
    };
  });
});

export const videos = [...unshuffledVideos].sort(() => Math.random() - 0.5);
// currently sliced for test
// .slice(0, 5);

console.log(videos);
