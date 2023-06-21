import React, { useState } from 'react'
import Display from '../Display/Display'
import "./Header.css"
import { Link } from 'react-router-dom';



export default function Header({data,setData}) {

  const [inputVal,setInputVal]=useState([]);
  const [inputLanguageVal,setInputLanguageVal]=useState([]);
  const[region,setRegion]=useState([]);
  const[categoryVal,setCategoryVal]=useState([]);
  const[LanguageVal,setLanguageVal]=useState([]);

  const [population, setPopulation] =useState(0);
  const flexCenter ={display:"flex", justifyContent:"center"};
 


  return (

    <div className="homePage">
        <ul className='nav-option'>
        <Link to={"/"}><li>Home</li></Link>
          <li>CUNTRIES</li>
          <li>About</li>
          <li><i class="fa fa-refresh fa-spin"></i></li>
        </ul>
            <div className="search">
              <label htmlFor="">search by name: </label>
              <input type="text" onChange={(e) => setInputVal(e.target.value) }/>
            </div>
            <div className="search">
              <label htmlFor="">search by language: </label>
              <input type="text" onChange={(e) => setInputLanguageVal(e.target.value) }/>
            </div>

            <div className='search'>
              <label htmlFor="">select a Language  </label>

                <select name="" id="" onChange={(e)=>setLanguageVal(e.target.value)} >
              <option value="">all</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Hebrew">Hebrew</option>
              <option value="Arabic">Arabic</option>
 
            </select>

            </div>



            <div className='search'>
              <label htmlFor="">select a region  </label>


                <select name="" id="" onChange={(e)=>setRegion(e.target.value)} >
              <option value="">all</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Africa">Africa</option>
              <option value="Oceania">Oceania</option>
              <option value="Polar">Polar</option>
              <option value="Antarctic">Antarctic</option>
              
            </select>

            </div>


       <div className="search">
            <label htmlFor="">More selects  </label>

        <select name="" id="" onChange={(e)=>setCategoryVal(e.target.value)} >
        <option value=""></option>
        <option value="population">population</option>
        <option value="Z-A">Z-A</option>
        <option value="A-Z">A-Z</option>
       
        </select>
        
       </div>

       <p style={flexCenter}>
<label htmlFor="">population :</label>
               
               <input style={{width : "250px"} } type="range"  min="100" max="1452000000" value={population} step="1000" onChange={(e)=>setPopulation(e.target.value)}/>
               </p>
               <p style={flexCenter}>
                        {population}
               </p>
  
          <div className='display'> 
          <Display data={data} setData={setData} inputVal={inputVal} region={region} categoryVal={categoryVal} inputLanguageVal={inputLanguageVal} LanguageVal={LanguageVal} population={population}/>
          </div>

      </div>
  )
}
