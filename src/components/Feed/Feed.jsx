import React, { useEffect, useState } from "react";
import "./feed.css";
import { Link } from "react-router-dom";
import moment from "moment";
import { API_key } from "../../data";

const Feed = ({catagary}) => {
  const [data,setdata] = useState([])
  const fechData=async()=>{
  const videosUrl= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${catagary}&key=${API_key}`
  await fetch(videosUrl).then(Response=>Response.json()).then(data =>setdata(data.items))
  }

  useEffect(()=>{
  fechData()
  },[catagary])
  console.log(data);
  return (
    <div className="feed">
    {data.map((item,index)=>{
    return(
  <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
        <img src={item.snippet.thumbnails.medium.url} alt="" />
        <h2>{item.snippet.title}</h2>
        <h3>{item.snippet.channelTitle}</h3>
        <p>{item.statistics.viewCount} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
      </Link>)
    })}
      
    </div>
  );
};

export default Feed;
