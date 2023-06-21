import React, { useState } from 'react'
import Card from "../Card/Card"
import "./Display.css"

export default function Display({data,setData,inputVal,region,categoryVal,inputLanguageVal,LanguageVal,population}) {

  const[keyVal,setKeyVal]=useState([]);



  if(categoryVal=="population")
  {
    console.log("test")
    data = data.sort(function(a,b){
      return b.population-a.population
    });
    setData(data);
  } 
  if(categoryVal=="A-Z")
  {
    data = data.sort(function(a,b){
      if(b.name > a.name)
      return -1;

    });
    
    setData(data);
}

   if(categoryVal=="Z-A")
  {
    data = data.sort(function(a,b){
      if(a.name > b.name)
      return -1;

    });
    
    setData(data);
}





let PpopulationRangeSelect = data.filter((e)=>{ return e.population > population })

let Languageentered  = PpopulationRangeSelect.filter((e)=>{ return e.languages[0].name.startsWith(LanguageVal)})

let LanguageSelecsion = Languageentered.filter((e)=>{ return e.languages[0].name.toLowerCase().startsWith(inputLanguageVal)})


let regionSelecsion = LanguageSelecsion.filter((e)=>{ return e.region.startsWith(region) })

let finelSelecsion = regionSelecsion.filter((e)=>{ return e.name.toLowerCase().startsWith(inputVal) })



return (
    <div>
    <h1> num of countries : {finelSelecsion.length}</h1>
<div className='res-card'>

      {finelSelecsion.map((countries,i)=> {return <Card countries={countries} keyVal={i+1} setKeyVal={setKeyVal}/>}) } 
     

</div>
    </div>

  )
}
