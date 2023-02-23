import React, { useEffect, useState } from 'react'
import "./weather.css";

function Weather() {
    const [search,SetSearch] =useState("");
    const [pressure,SetPressure]=useState();
    const [temptuare ,SetTempature] =useState();
    const [humidity,Sethumidity]=useState();
    
    
    useEffect(()=>{
        const fetchData = async ()=>{
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=270508855a167a20638c0a934229e85d`
            const res = await fetch(url);
             const resJson = await res.json();
             SetPressure(resJson.main.pressure)
              SetTempature(resJson.main.temp);
             Sethumidity(resJson.main.humidity) 

}    
fetchData();
    }, [search])
  return (
    <div>
        <div className='mainconatiner'>
             <div className='secondContainer'>
                <h3>Weather App</h3>
                 <input  type="input" placeholder='Search Your City' name='search'  className='inputBox' onChange={(e)=>SetSearch(e.target.value)}  value={search} /> 
                {!pressure ?  "No City found" :( <><p style={{marginTop:"15px"}}>{search}  Weather Today</p><div>
                      <img src='https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png' alt='colud' height="140" />
                  </div><div className='info'>
                          <h5>Temperature : {Math.round(temptuare)}&#8451;</h5>
                          <h5>Pressure : {pressure}p</h5>
                          <h5>Humidity :{humidity}%</h5>
                      </div></>) } 
             </div>
        </div>
    </div>
  )
}

export default Weather