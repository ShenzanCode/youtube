import React from 'react'
import "./videos.css"
import Playvideos from '../../components/playVides/Playvideos'
import Rekmanted from '../../components/Rekmanted/Rekmanted'
import { useParams } from 'react-router-dom'

const Videos = () => {

  const {videoId,categoryId} = useParams();
  return (
    <div className="playcontainer">
      <Playvideos videoId={videoId}/>
      <Rekmanted/>
    </div>
  )
}

export default Videos