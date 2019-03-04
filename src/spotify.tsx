import * as React from "react";

export interface SpotifyProps {
  /** @name Music @description Paste the Spotify share link of an album, song or playlist @default https://open.spotify.com/album/5j1ZsFyNCsnt62prbs85eE?si=OrQ5P3P1SNC5u1aUzqJLzA */
  music: string;

  /** @name Width @default 75% @group Size */
  width?: string;

  /** @name Height @default 360px @group Size */
  height?: string;
}

/** 
 * @name Spotify
 * @icon Music
 */
export const Spotify: React.SFC<SpotifyProps> = props => {
  const parts = props.music.split('/');
  const url = `https://open.spotify.com/embed/${parts[parts.length-2]}/${parts[parts.length-1]}`;

  return (
    <iframe
      src={url}
      frameBorder="0"
      allowTransparency
      allow="encrypted-media"
      style={{
        width: props.width,
        height: props.height,
        overflow: 'hidden',
        background: 'transparent',
        display: 'block'
      }}></iframe>
  );
};
