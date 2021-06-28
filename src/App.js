import React,{useState, useEffect} from 'react';
import './App.css';
import Weather from './Weather';
import Card from './card';

function App() {

  const [search, setSearch] = useState("karachi");
  const [city, setCity] = useState("");
  const [allCities,setAllCities]= useState([]);
  // useEffect(() => {
  //   const weather_temp=()=>{
  //     const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=87e794f41494a00278a7066a3e7e4d87&units=metric`;
  //     const hello=fetch(url)
  //   hello.then((res)=>{
  //     const json=res.json()
  //     json.then(data=>{
  //       if(data.message==='city not found'){
  //         console.log('error')
  //       }
  //       else{
  //        console.log("data====>",data)
  //        setCity(json)
  //       }
  //   })
  //   })
  //   hello.catch((error)=>console.log(error))
  //   }
  //   weather_temp();
  // },[setCity])
  
  const fetchWeather = (location)=>{
    console.log("location",location);
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=87e794f41494a00278a7066a3e7e4d87&units=metric`;
      const hello=fetch(url)
    hello.then((res)=>{
      console.log("res",res);
      const json=res.json()
      json.then(data=>{
        if(data.message==='city not found'){
          console.log('error')
        }
        else{
         console.log("data====>",data)
         setCity(data);
         setAllCities((previousData) =>{
           const preData = [...previousData];
           preData.push(data);
           return preData;
         });
        }
    })
    })
    hello.catch((error)=>console.log(error))
  } 
  console.log(search)
  console.log(city,"city")
  console.log(allCities,"all cities");
  
  return (
  <div className= "parent">
   <div className="main">
     <h1 className="heading">Simple Weather App</h1>
     <input type="text" placeholder="seach for the city" className="input"  onChange = {(event) => {setSearch(event.target.value)}}/>
     <button className = "button" onClick={()=> fetchWeather(search)} >Submit</button>
    <div className = "parent1">
      {allCities.map(city => {
        const {main, name} = city;
        const {humidity,temp} = main;
        return (
          <Weather  humidity={humidity} temp={temp} name={name}/>
        )
      }
       )}
    
     <Card/>
    </div>


    </div>
  </div>
  );
}

export default App;
