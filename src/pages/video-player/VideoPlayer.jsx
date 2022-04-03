import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Nav } from "../../components/nav/Nav";
import { Player } from "../../components/video-player/Player";
const VideoPlayer = () => {
  return (
    <div>
      <div>
        <div>
          <Nav />
        </div>
        <Sidebar />
        <div>
          <Player />
        </div>
      </div>
    </div>
  );
};

export { VideoPlayer };
