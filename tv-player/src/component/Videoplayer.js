import React, { useEffect, useState } from "react";
import logo from "../logo.webp";
import "../App.css";
import axios from "axios";


import List from "./List";
import Reactplay from "./Reactplay";


const Videoplayer = () => {
  const [list, setList] = useState(false);
  const [caption, setCaptions] = useState(false);
  const [showItem, setShowItem] = useState(10);
  const [startItem, setStartItem] = useState(0);
  const daata = [
    {
      id: 0,
      name: "first video",
      subtitle: "first title",
      image: "/video-placeholder.jpg",
      clientName: "virat kohli",
      videolink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      captions:
        "https://raw.githubusercontent.com/benwfreed/test-subtitles/master/mmvo72166981784.vtt",
    },
    {
      id: 1,

      name: "second video",
      subtitle: "seond title",
      clientName: "sacine",

      image: "/dummy-logo-2.png",
      videolink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      captions:
        "https://raw.githubusercontent.com/benwfreed/test-subtitles/master/mmvo72166981784.vtt",
    },
    {
      id: 2,

      name: "third video",
      clientName: "shubham",

      subtitle: "third title",
      image: "/dummy-logo-5b.png",
      videolink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      captions:
        "https://raw.githubusercontent.com/benwfreed/test-subtitles/master/mmvo72166981784.vtt",
    },
    {
      id: 3,

      name: "fourth video",
      subtitle: "fourth title",
      clientName: "hardik",

      image: "/images.png",
      videolink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      captions:
        "https://raw.githubusercontent.com/benwfreed/test-subtitles/master/mmvo72166981784.vtt",
    },
    {
      id: 4,

      name: "six video",
      subtitle: "six title",
      clientName: "hardik",

      image: "/dummy-logo-3.png",
      videolink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      captions:
        "https://raw.githubusercontent.com/benwfreed/test-subtitles/master/mmvo72166981784.vtt",
    },
    {
      id: 5,

      name: "seven video",
      subtitle: "seven title",
      clientName: "yash",

      image: "/as.png",
      videolink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      captions:
        "https://raw.githubusercontent.com/benwfreed/test-subtitles/master/mmvo72166981784.vtt",
    },
    {
      id: 6,

      name: "eight video",
      subtitle: "seven title",
      clientName: "yash",

      image: "/as.png",
      videolink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      captions:
        "https://raw.githubusercontent.com/benwfreed/test-subtitles/master/mmvo72166981784.vtt",
    },
    {
      id: 7,

      name: "nine video",
      subtitle: "seven title",
      clientName: "yash",

      image: "/as.png",
      videolink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      captions:
        "https://raw.githubusercontent.com/benwfreed/test-subtitles/master/mmvo72166981784.vtt",
    },
    {
      id: 8,

      name: "ten video",
      subtitle: "ten title",
      clientName: "yash",

      image: "/as.png",
      videolink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      captions:
        "https://raw.githubusercontent.com/benwfreed/test-subtitles/master/mmvo72166981784.vtt",
    },
    {
      id: 9,

      name: "eleven video",
      subtitle: "elevne title",
      clientName: "yash",

      image: "/as.png",
      videolink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      captions:
        "https://raw.githubusercontent.com/benwfreed/test-subtitles/master/mmvo72166981784.vtt",
    },
    {
      id: 10,

      name: "twelev video",
      subtitle: "twelve title",
      clientName: "yash",

      image: "/as.png",
      videolink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      captions:
        "https://raw.githubusercontent.com/benwfreed/test-subtitles/master/mmvo72166981784.vtt",
    },
    {
      id: 11,

      name: "thirty video",
      subtitle: "thirty title",
      clientName: "yash",

      image: "/as.png",
      videolink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      captions:
        "https://raw.githubusercontent.com/benwfreed/test-subtitles/master/mmvo72166981784.vtt",
    },
    {
      id: 12,

      name: "fourty video",
      subtitle: "seven title",
      clientName: "yash",

      image: "/as.png",
      videolink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      captions:
        "https://raw.githubusercontent.com/benwfreed/test-subtitles/master/mmvo72166981784.vtt",
    },
    {
      id: 13,

      name: "fifty video",
      subtitle: "seven title",
      clientName: "yash",

      image: "/video-placeholder.jpg",
      videolink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      captions:
        "https://raw.githubusercontent.com/benwfreed/test-subtitles/master/mmvo72166981784.vtt",
    },
    {
      id: 14,

      name: "sixty video",
      subtitle: "seven title",
      clientName: "yash",

      image: "/as.png",
      videolink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      captions:
        "https://raw.githubusercontent.com/benwfreed/test-subtitles/master/mmvo72166981784.vtt",
    },
    {
      id: 15,

      name: "sevntenn video",
      subtitle: "seven title",
      clientName: "yash",

      image: "/dummy-logo-5b.png",
      videolink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      captions:
        "https://raw.githubusercontent.com/benwfreed/test-subtitles/master/mmvo72166981784.vtt",
    },
    {
      id: 16,

      name: "eighteen video",
      subtitle: "eighteen title",
      clientName: "eighteen",

      image: "/video-placeholder.jpg",
      videolink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      captions:
        "https://raw.githubusercontent.com/benwfreed/test-subtitles/master/mmvo72166981784.vtt",
    },
    {
      id: 17,

      name: "nintenn video",
      subtitle: "nintenn title",
      clientName: "yash",

      image: "/dummy-logo-5b.png",
      videolink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      captions:
        "https://raw.githubusercontent.com/benwfreed/test-subtitles/master/mmvo72166981784.vtt",
    },
    {
      id: 18,

      name: "twenty video",
      subtitle: "twenty title",
      clientName: "yash",

      image: "/video-placeholder.jpg",
      videolink:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      captions:
        "https://raw.githubusercontent.com/benwfreed/test-subtitles/master/mmvo72166981784.vtt",
    },
  ];
  const [current, setCureent] = useState(daata[0]);

  const handleList = async (key) => {
    await daata.find((ele) => {
      if (ele.id == key) {
        return setCureent(ele);
      }
    });
  };
  const arrowHandle = () => {
    setShowItem(showItem + 3);
    setStartItem(startItem + 3);
  };

  useEffect(() => {
    const res = axios.get(
      "https://3dzmz2bvw2.execute-api.us-east-1.amazonaws.com/Dev/api/Videoplayer",
      {
        headers: {
          api_key:
            "c2lxKkfOxMtWw1nTsNZLbOoEMoH5q72gNqfnDxWYpuRTE6ae8zGNQ5A1uULMjG6q",
        },
      }
    );
  }, []);
  return (
    <div className="">

      <div className="header-div">
      <div className="video-logo">
        <img className="img-fluid" src={current.image} />
      </div>
      <div className="sub-title ">
        <h3>{current.name} </h3>

        <p>{current.clientName}</p>
      </div>
      </div>
      <Reactplay data={current} caption={caption} />

      <div className="controls">
        <div className="errorr">
          <a href="https://www.google.com" target="_blank">  

          <i class="fa fa-exclamation-circle" aria-hidden="true"></i>

          </a>
   

        </div>
        {/* 
        <div className="caption">
          <ClosedCaption fontSize="medium" onClick={() => setCaptions(true)} />
        </div> */}

        <div className="setting">
        <i class="fa fa-cog" aria-hidden="true"></i>

        </div>
        <div className="list">
          <p  onClick={() => {
              if (list === true) {
                setList(false);
              } else {
                setList(true);
              }
            }}>   <i class="fa fa-bars" aria-hidden="true"></i>
            </p>
       
        </div>
      </div>

      <div className="list-vidoe-mobile">
      {daata.slice(startItem, showItem).map((ele, key) => (
        <div
          className="row mb-3"
          onClick={() => handleList(key)}
          key={key}
        >
          <div className="col-12 col-md-4 list-img">
            <img class="w-100" src={ele.image} />
          </div>
          <div className="col-12 col-md-8 text-start ">
            <h4>{ele.name} </h4>
            <h6>{ele.subtitle}</h6>
          </div>
        </div>
      ))}
      {daata.slice(startItem, showItem).length == 10 ? (
        <p
          onClick={() => arrowHandle()}
          className="arrow-key"
        >
          <i class="fa-thin fa-chevron-down"></i>
        </p>
      ) : (
        ""
      )}
    </div>
      {list === true ? (
        <List
          data={daata}
          handleList={handleList}
          arrowHandle={arrowHandle}
          startItem={startItem}
          showItem={showItem}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Videoplayer;
