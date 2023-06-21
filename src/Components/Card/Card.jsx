import React, { useState } from 'react'
import "./Card.css"
import { Link } from 'react-router-dom';

export default function Card({countries,keyVal,setKeyVal}) {

  setKeyVal(keyVal);

  return (
    
    <div className='card'>
      <Link to={countries.name}><img src={countries.flags.svg} alt="" width={"200px"}/></Link>
     <Link to={countries.name}><h3>{keyVal + " :  " + countries.name}</h3></Link>
     <Link to={`${countries.name}`} ><h3>capital : {countries.capital}</h3></Link>
     <Link to={`${countries.name}`} ><h3>region : {countries.region}</h3></Link>
     <Link to={`${countries.name}`} ><h3>languages: {countries.languages[0].name}</h3></Link>
      </div>

  )
}
