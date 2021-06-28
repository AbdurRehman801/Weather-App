import React,{useState, useEffect} from 'react';
import './App.css'
import CloudRoundedIcon from '@material-ui/icons/CloudRounded';

const Weather = (props) =>{
    console.log ( "props====>", props)

   

    return(
 <div className = "main1">
     <h2 className= "weather_heading">{props.name}</h2>
     <p className = "weather_temp">{props.temp}<sup>o</sup>C</p>
     <CloudRoundedIcon style={{fontSize:"80px", marginLeft: "30px" }} />
     <h4 className= "info_1">Humanidity: {props.humidity}</h4>


 </div>
 )
}

export default Weather;