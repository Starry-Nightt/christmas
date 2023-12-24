import React, { memo, useEffect, useRef } from "react";
import useSound from "use-sound";

const MusicPlayer = ({ url }) => {
  const [play, { stop }] = useSound(url, {
    volume: 1,
    onend: () => play(),
  });

  useEffect(() => {
    play();

    
    return () => {
      stop();

    };
  }, [play, stop]);

  return null;
};

export default memo(MusicPlayer);
