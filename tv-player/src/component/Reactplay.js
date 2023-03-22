import React, { useEffect } from "react";
import ReactPlayer from "react-player/lazy";
const Reactplay = (props) => {



  return (
    <>


      <ReactPlayer
        className="react-player"
        url={props.data.videolink}
        controls={true}
        playing={true}
        captions={{
          url: "https://example.com/my-captions.vtt",
          kind: "captions",
          default: true,
        }}
      ></ReactPlayer>
    </>
  );
};

export default Reactplay;
