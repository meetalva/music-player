import * as React from "react";

export interface AppleMusicProps {
  /** @name Music @description Paste the share (not embed) link of an album, song or playlist @default https://itunes.apple.com/us/album/wasteland-baby/1448967234 */
  music: string;

  /** @name Width @default 75% @group Size */
  width?: string;

  /** @name Height @default 360px @group Size */
  height?: string;
}

/** 
 * @name Apple Music
 * @icon Music
 */
export const AppleMusic: React.SFC<AppleMusicProps> = props => {
  const parts = props.music.split('/');
  const url = `https://embed.music.apple.com/${parts[3]}/${parts[4]}/${parts[6]}`;

  return (
    <iframe
      allow="autoplay *; encrypted-media *;"
      frameBorder="0"
      style={{
        width: props.width,
        height: props.height,
        overflow: 'hidden',
        background: 'transparent',
        display: 'block'
      }}
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src={url}
    ></iframe>
  );
};
