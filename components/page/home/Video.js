import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import { VideoWrapper } from "./styled/VideoStyled.styled";
import { useInView } from "react-intersection-observer";

const Video = ({ videoId }) => {
  const [player, setPlayer] = useState(null);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      muted: 1,
      controls: 1,
    },
  };

  const ready = (event) => {
    console.log("Video Ready");
    console.log("event?.target", event?.target);
    setPlayer(event?.target);
  };
  const play = (event) => {
    console.log("Video play");
    setPlayer(event?.target);
  };
  const pause = (event) => {
    console.log("Video pause");
  };
  const end = (event) => {
    console.log("Video end");
  };
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.7,
  });

  const videoRef = useRef(null);

  useEffect(() => {
    // console.log("Video view", inView);
    if (player) {
      if (inView) {
        console.log("ref", videoRef?.current?.refs);
      } else {
        // videoRef?.current
        player.pauseVideo();
      }
    }
  }, [inView, player]);

  return (
    <VideoWrapper ref={ref}>
      <YouTube
        videoId={videoId} // defaults -> null
        opts={opts}
        // id={string} // defaults -> null
        // className={string} // defaults -> null
        containerClassName={"videoWrapper"} // defaults -> ''
        title={"video title"} // defaults -> null
        onReady={(event) => ready(event)} // defaults -> noop
        onPlay={(event) => play(event)} // defaults -> noop
        onPause={(event) => pause(event)} // defaults -> noop
        onEnd={(event) => end(event)} // defaults -> noop
        // onError={func} // defaults -> noop
        // onStateChange={func} // defaults -> noop
        // onPlaybackRateChange={func} // defaults -> noop
        // onPlaybackQualityChange={func} // defaults -> noop
        ref={videoRef}
      />
    </VideoWrapper>
  );
};

export default Video;
