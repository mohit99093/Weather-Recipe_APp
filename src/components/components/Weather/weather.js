import React from 'react';
import  './Weather.css'

const Weather = (props) => {
    let data =null
    if(props.desc)
    {
        data=(
            <div className='w-data  '>
                    <div className="center ">
                    <p className="w-start "> <span className="w-h"> Temperature</span>  : <span> {props.temp} (F) </span></p>
                    <p className="w-start"><span> Discription</span>   : <span> {props.desc} </span></p>
                    <p className="w-start"><span>  Humidity </span>     :<span> {props.humi} </span></p>
                    </div>
            </div>
        )
    }
    return data 
          
}
 
export default Weather;