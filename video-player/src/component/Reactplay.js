import React, { useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import Slider from "react-player-controls/dist/components/Slider";
const Reactplay = (props) => {



  return (
    <>

<Slider className="slider"/>

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
