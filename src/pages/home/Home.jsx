import React, { useState } from 'react'
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
const Home = ({sidebar}) => {

const [catagary,setcatagary]=useState(0)

  return (
    <>
    <Sidebar sidebar={sidebar} catagary={catagary} setcatagary={setcatagary}/>
    <div className={`container ${sidebar?"":"large-container"}`}>
    <Feed catagary={catagary}/>
    </div>
    </>
  )
}

export default Home