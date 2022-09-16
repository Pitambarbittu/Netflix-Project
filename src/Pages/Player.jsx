import React from 'react'
import {Link} from "react-router-dom"
import {useParams} from "react-router-dom"





const Player = () => {
    const {moviename} = useParams();

    
    
  return (
    <div>
    <h1 style={{color:"white",position:"relative", left:"35%" }}>Player 🎙️ {moviename}</h1> 
   
    

   
   
    <Link to="/home"><button style={{color:"red", backgroundColor:"yellow", borderRadius:"8px", position:"absolute", left:"50%"}}>Go Home</button></Link>
    <br /><br /><br />

    <img className="player-img
    " height={200} src="http://image.tmdb.org/t/p/w342//Ag21otqbeynZPGjEbzyr3X5Us0j.jpg" alt="" />

    <img className="player-img
    " height={200} src="https://mypostercollection.com/wp-content/uploads/2019/07/love-triangle-vampires.jpg" alt="" />

    <img className="player-img
    " height={200} src="https://pbs.twimg.com/media/FGGhymwVIAMJUDd.jpg:large" alt="" />

    <img className="player-img
    " height={200} src="https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/5157/875157-v" alt="" />

    <img className="player-img
    " height={200} src="https://assets-prd.ignimgs.com/2022/05/12/stranger-things-4-poster-1652364986162.jpeg" alt="" />

    <img className="player-img
    " height={200} src="https://www.gamespot.com/a/uploads/original/1582/15828986/3606754-witcher%20poster.jpg" alt="" />

    <img className="player-img
    " height={200} src="https://static.onecms.io/wp-content/uploads/sites/6/2018/10/lgc_s1_8x12_300dpi1-2000.jpg" alt="" />

    <img className="player-img
    " height={200} src="https://m.media-amazon.com/images/M/MV5BMjE1MTM4NDAzOF5BMl5BanBnXkFtZTgwNTMwNjI0MzE@._V1_.jpg" alt="" />

    <img className="player-img
    " height={200} src="https://images-na.ssl-images-amazon.com/images/I/81y2bhxcIfL.jpg" alt="" />

    <img className="player-img
    " height={200} src="https://stat1.bollywoodhungama.in/wp-content/uploads/2019/03/RRR-2022.jpeg" alt="" />

    <img className="player-img
    " height={200} src="https://www.spidermannowayhome.movie/assets/images/fullbanner.jpg" alt="" />

    <img className="player-img
    " height={200} src="https://m.media-amazon.com/images/M/MV5BYWJmNzRiMWEtNzk3Ni00OGU5LThlMDctYmJhMTA1YzEzNjY4XkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_UY1200_CR89,0,630,1200_AL_.jpg" alt="" />

    <img className="player-img
    " height={200} src="https://i.pinimg.com/736x/8a/a5/e7/8aa5e71d20b5e48a1bfe35859d67049c.jpg" alt="" />

    <img className="player-img
    " height={200} src="https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" alt="" />

    <img className="player-img
    " height={200} src="https://m.media-amazon.com/images/M/MV5BMGExOWU4YmItMjkxOC00NjdjLTk2ZWEtZGViMGM1ZGFhZmQxXkEyXkFqcGdeQXVyODQyOTY2OTA@._V1_.jpg" alt="" />

    <img className="player-img
    " height={200} src="https://cdn.cinematerial.com/p/297x/osu2gdkh/tom-and-jerry-movie-poster-md.jpg?v=1614079055" alt="" />

   
    </div>
  )
}

export default Player
