import React, { useState } from 'react'
import Card from '../component/Card'
import { movie_Data } from '../data'
// import {Link} from "react-router-dom"

export default function () {
  const [search, setSearch] = useState("")

  const printing = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>

      {/* <input className='type' type="text" placeholder='Type Movie Name' onChange={(event) => { printing(event) }} /> */}
      <input className='type' type="text" placeholder='Type Movie Name' onChange={printing} />

      {/* <Link to="/Player"> Player </Link> */}

      <div className='container mt-5 cards-container'>
        {
          movie_Data.map((val, i) => {
            {/* if (((val.description).toLowerCase()).includes((search).toLowerCase())) { */}
              {/* if (val.name.toLowerCase().startsWith(search.toLowerCase())) { */}
              if (search.length < 2 || val.name.toLowerCase().includes(search.toLowerCase())) {
              return (
                <Card name={val.name} time={val.time} img={val.img} desc={val.description} profile={val.profile_img} key={i} />
              )
            }
          })
        }


      </div>

    </>
  )
}
