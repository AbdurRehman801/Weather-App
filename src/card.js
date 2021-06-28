import React from 'react';
import './App.css'
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';

const Card = () =>{
    return(
 <div className = "main2">
     <h3 className= "weather_heading">Melbourne</h3>
     <h1 className = "weather_temp">15C</h1>
     <WbSunnyOutlinedIcon style={{fontSize:"100px", marginLeft: "30px" }}/>
     <h4 className= "info_1">Clear Sky</h4>

 </div>
 )
}

export default Card;