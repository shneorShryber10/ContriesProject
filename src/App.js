import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Display from './Components/Display/Display';

import Card from "./Components/Card/Card.jsx"

import { useState ,useEffect} from 'react';
import DisplayOneCard from './Components/DisplayOneCard/DisplayOneCard';
import Header from './Components/Header/Header';



function App() {

  const [data, setData] = useState([]);

  
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
          setData(data)
      });
  }, []);

  return (

    <div>
     
    <Routes>
    <Route path='/' element={<Header data={data} setData={setData} />} ></Route>
    <Route path='/:name' element={<DisplayOneCard  data={data}/>} ></Route>
    </Routes>
    </div>
  );
}

export default App;
