import MuxPlayer from "@mux/mux-player-react"; 

export default function App() {
  return (
    <MuxPlayer
      playbackId="w1WMUemcs014F95mNk009WTwjak4LWSp500Gjbcbmq9Sqc"
      metadata={{
        video_id: "video-id-54321",
        video_title: "Test video title",
        viewer_user_id: "user-id-007",
      }}
      autoPlay="muted"
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}
