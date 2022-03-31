import React from "react";
import { PlaylistListing } from "../../components/playlists/PlaylistListing";

import { Nav } from "../../components/nav/Nav";
import { Sidebar } from "../../components/sidebar/Sidebar";

const Playlists = () => {
  return (
    <div>
      <div>
        <div className="left">
          <Nav />
        </div>
        <Sidebar />
        <div className="left">
          <PlaylistListing />
        </div>
      </div>
      Playlists page hai bhai jaldhi karo job nhi chiae ky ? garrab hi rehna hai
      kya?
    </div>
  );
};

export { Playlists };
