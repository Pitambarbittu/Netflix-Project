import React from 'react'
import {Link} from "react-router-dom"



export default function Card(props) {
  return (
    <>
    
        {/* to={`player/${props.name}`} */}
      <Link to={"player/"+props.name} className="card">
        <img src={props.img} className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
            <img className="card__thumb" src={props.img} alt="" />
            <div className="card__header-text">
              <h3 style={{ color: "blue" }} className="card__title">{props.name}</h3>
              <span style={{ color: "black" }} className="card__status">{props.time} hour</span>
            </div>
          </div>
          <p style={{ color: "black" }} className="card__description">{props.desc}</p>
        </div>
      </Link>

    </>
  )
}
