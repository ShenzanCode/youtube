import React, { useEffect, useState } from "react";
import "./playvideo.css";
import videos1 from "../../assets/video.mp4";
import moment from "moment";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_frofile from "../../assets/user_profile.jpg";
import { API_key } from "../../data";

const Playvideos = ({videoId}) => {
  const [apidata, setapidata]=useState(null)
  const [cannaldata, setchannaldata]=useState(null)

  const featchChannaldata= async()=>{
    const channalDetails= await`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelid}&key=${API_key}`
    await fetch(channalDetails).then(response=>response.json()).then(data =>setchannaldata(data.items[0]))
  }
  const featchVideodata= async()=>{
    const vidoesDetails= await`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_key}`
    await fetch(vidoesDetails).then(response=>response.json()).then(data =>setapidata(data.items[0]))
  }

  useEffect(()=>{
    featchVideodata();
  },[])
  useEffect(()=>{
    featchChannaldata()
  },[apidata])
  return (
    <div className="play-video">
      {/* <iframe src={`https://www.youtube.com/embed/${videosId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
      {/* <video src={videos1} controls autoPlay muted></video> */}
      <iframe width="695" height="391" src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen mut></iframe>
      <h3>{apidata?apidata.snippet.title:"Title here"}</h3>
      <div className="playvideoinfo">
      <p>{apidata?apidata.statistics.viewCount:"16k"} views &bull; {apidata?moment(apidata.snippet.publishedAt).fromNow():" "}</p>
        <div>
          <span>
            <img src={like} alt="" />
            {apidata? apidata.statistics.likeCount:"155"}
          </span>
          <span>
            <img src={dislike} alt="" />{apidata? apidata.statistics.likeCount:"155"}
          </span>
          <span>
            <img src={share} alt="" />
            share
          </span>
          <span>
            <img src={save} alt="" />
            save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={cannaldata?cannaldata.snippet.thumbnails.default.url:" "} alt="" />
        <div>
          <p>{apidata?apidata.snippet.channelTitle:"this is channal Tittle"}</p>
          <span>1M Subsriber</span>
        </div>
        <button>Subcriber</button>
      </div>
      <div className="videosDescription">
        <p>{apidata?apidata.snippet.description.slice(0,255):" "}</p>
        <p>Subcribe Devpro to watch more tutorials on web development</p>
        <hr />
        <h4>{apidata?apidata.statistics.commentCount:102}</h4>
        <div className="comments">
          <img src={user_frofile} alt="" />
          <div>
            <h3>
              Jack Micholson <span>1 day ago</span>
            </h3>
            <p>
              A globall computer network providing a variety of programming
              languages and information about programming.
            </p>
            <div className="comments-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={user_frofile} alt="" />
          <div>
            <h3>
              Jack Micholson <span>1 day ago</span>
            </h3>
            <p>
              A globall computer network providing a variety of programming
              languages and information about programming.
            </p>
            <div className="comments-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={user_frofile} alt="" />
          <div>
            <h3>
              Jack Micholson <span>1 day ago</span>
            </h3>
            <p>
              A globall computer network providing a variety of programming
              languages and information about programming.
            </p>
            <div className="comments-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={user_frofile} alt="" />
          <div>
            <h3>
              Jack Micholson <span>1 day ago</span>
            </h3>
            <p>
              A globall computer network providing a variety of programming
              languages and information about programming.
            </p>
            <div className="comments-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comments">
          <img src={user_frofile} alt="" />
          <div>
            <h3>
              Jack Micholson <span>1 day ago</span>
            </h3>
            <p>
              A globall computer network providing a variety of programming
              languages and information about programming.
            </p>
            <div className="comments-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playvideos;
