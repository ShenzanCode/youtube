import React from 'react'
import "./sidebar.css"
import home from "../../assets/home.png"
import game_icon from "../../assets/game_icon.png"
import automobile from "../../assets/automobiles.png"
import sport from "../../assets/sports.png"
import entertainment from "../../assets/entertainment.png"
import tech from "../../assets/tech.png"
import music from "../../assets/music.png"
import blog from "../../assets/blogs.png"
import news from "../../assets/news.png"
import jack from "../../assets/jack.png"
import simon from "../../assets/simon.png"
import tom from "../../assets/tom.png"
import megan from "../../assets/megan.png"
import cameron from "../../assets/cameron.png"





const Sidebar = ({sidebar,catagary,setcatagary}) => {
  return (
    <>
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="sortcut-link">
            <div className={`side-link ${catagary===0? 'active':""}`} onClick={()=>setcatagary(0)}>
                <img src={home} alt="" /><p>Home</p>
            </div>
            <div className={`side-link ${catagary===20? 'active':""}`} onClick={()=>setcatagary(20)}>
                <img src={game_icon} alt="" /><p>Gaming</p>
            </div>
            <div className={`side-link ${catagary===2? 'active':""}`} onClick={()=>setcatagary(2)}>
                <img src={automobile} alt="" /><p>Automobiles</p>
            </div>
            <div className={`side-link ${catagary===17? 'active':""}`} onClick={()=>setcatagary(17)}>
                <img src={sport} alt="" /><p>Sport</p>
            </div>
            <div className={`side-link ${catagary===23? 'active':""}`} onClick={()=>setcatagary(23)}>
                <img src={entertainment} alt="" /><p>Comedy</p>
            </div>
            <div className={`side-link ${catagary===28? 'active':""}`} onClick={()=>setcatagary(28)}>
                <img src={tech} alt="" /><p>Technology</p>
            </div>
            <div className={`side-link ${catagary===10? 'active':""}`} onClick={()=>setcatagary(10)}>
                <img src={music} alt="" /><p>Music</p>
            </div>
            <div className={`side-link ${catagary===22? 'active':""}`} onClick={()=>setcatagary(22)}>
                <img src={blog} alt="" /><p>Blogs</p>
            </div>
            <div className={`side-link ${catagary===25? 'active':""}`} onClick={()=>setcatagary(25)}>
                <img src={news} alt="" /><p>News</p>
            </div>
        </div>
        <hr />
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src={jack} alt="" /><p>PerDiePie</p>
            </div>
            <div className="side-link">
                <img src={simon} alt="" /><p>MrBeast</p>
            </div>
            <div className="side-link">
                <img src={tom} alt="" /><p>Justin Bieber</p>
            </div>
            <div className="side-link">
                <img src={megan} alt="" /><p>5-Minute Crafts</p>
            </div>
            <div className="side-link">
                <img src={cameron} alt="" /><p>Nas Daily</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar