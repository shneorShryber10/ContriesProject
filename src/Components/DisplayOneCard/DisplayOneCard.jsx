import React from 'react'
import "./DisplayOneCard.css"
import { Link,useParams} from 'react-router-dom'

export default function DisplayOneCard({data}) {

  const params = useParams();
  const currentCountry = data.find(
    (country) => country.name === params.name
  );
  

  return (
    <div>

<div className='button-back'>
  <Link to={"/"}><button>back</button></Link>
</div>
    <div className='one-card'>

      <img src={currentCountry.flag} alt="" width={"400px"}/>
     <h1>{currentCountry.name}</h1>
     <h3>capital : {currentCountry.capital}</h3>
     <h3>region : {currentCountry.region}</h3>
     <h3> Popularity: {currentCountry.population}</h3>
   <div >
   
   {currentCountry.borders ? <div className='borders'> border with: {currentCountry.borders.map((e)=> {return <h4>{e}</h4>})} </div>: <div><h2>no borders</h2></div>}
    
    </div> 

      </div>
    </div>
    
  )
}
