# YOUWARE.md

# Visual Perception Experiment Interface

This project is a React-based web experiment interface designed for presenting visual stimuli and collecting user ratings.

## Project Overview

- **Type**: React + TypeScript Web Application
- **Purpose**: Psychology/Neuroscience visual perception experiment
- **Core Features**:
  - Video Stimulus Presentation (15s duration)
  - 5-Point Interactive Rating Scale
  - Sequential Navigation (Prev/Next)
  - Break/Resume Functionality with Relaxing Overlay
  - Local Data Persistence (localStorage)
  - Simulated Data Submission

## Architecture

### Directory Structure

```
src/
├── components/
│   ├── StimulusPlayer.tsx    # Main player container (Video + Controls)
│   ├── RatingScale.tsx       # 1-5 Rating UI
│   └── BreakOverlay.tsx      # Fullscreen nature relaxation screen
├── data/
│   └── videos.ts             # Mock data for 64 video stimuli
├── App.tsx                   # Main application logic & state management
└── main.tsx                  # Entry point
```

### Key Components

1.  **StimulusPlayer**:
    -   Manages video playback using HTML5 `<video>` ref.
    -   Tracks playback progress (15s limit).
    -   Handles "End of Video" state to allow replay.
    -   Integrates `RatingScale` and Navigation buttons.

2.  **App Container**:
    -   **State**:
        -   `currentIndex`: Tracks progress (0-63).
        -   `ratings`: Dictionary mapping `videoId` -> `rating`.
        -   `isPaused`: Toggles the Break Overlay.
    -   **Persistence**: Syncs state to `localStorage` ('experiment_ratings', 'experiment_index') to prevent data loss on refresh.
    -   **Completion**: Displays a summary screen upon finishing all 64 videos.

### Data Flow

1.  User watches video (15s).
2.  User rates video (1-5).
3.  Rating is stored in `ratings` state and `localStorage`.
4.  User clicks "Next".
5.  On final video, data is "submitted" (currently logged to console, ready for backend integration).

## Development

### Commands

-   **Install**: `npm install`
-   **Dev Server**: `npm run dev`
-   **Build**: `npm run build`
-   **Preview**: `npm run preview`

### Configuration

-   **Video Data**: Edit `src/data/videos.ts` to update video URLs and metadata.
-   **Break Image**: The break overlay image is hardcoded in `src/components/BreakOverlay.tsx` (sourced from Unsplash).

## Future Improvements

-   **Backend Integration**: Replace the simulated `finishExperiment` log with a real API call (e.g., using `fetch` or `axios` to a backend endpoint).
-   **Video Preloading**: Implement preloading for smoother transitions between stimuli.
-   **Input Blocking**: Option to enforce full 15s viewing before enabling the rating scale.
