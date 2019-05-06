import React, { Component } from 'react';
import './Form.css';
import Weather from '../Weather/weather'
import { Link } from 'react-router-dom'
import  { MDBBtn } from 'mdbreact'

const api_key = '7c7458cbfbd5168cce46b0733d0e3ee9'

class Form extends Component {
    state={
        city:null,
        country:null,
        temp:null,
        humi:null,
        desc:null,
        error:null,
        loading:false
    }
    change1 =(e)=>{
        this.setState({ country:e.target.value  });
       
    }
    change2 =(e)=>{
        this.setState({ city:e.target.value  });
    }
    
 
    getWeather =async (e)=>{
        let data;
        let api_call
        try{
            this.setState({ loading:true  });
             api_call = this.state.city !== null ? await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=${api_key}` ) :null
            data = await api_call.json();
       
            this.setState({ temp:data.main.temp ,humi:data.main.humidity,desc:data.weather[0].description });
            this.setState({ loading:false  });
        }
        catch (e){
          alert(e.message)
        }
    }
    render(props) { 
   let loader = this.state.loading ? <div className="spinner-border loader" role="status"></div> : <Weather temp={this.state.temp} humi={this.state.humi} desc={this.state.desc}/>

        return ( 
            <div className="w-f-body">
                <form >
                <input type="text" placeholder="Country" name="country" onChange={(e)=>this.change1(e)}/>
                <input type="text" placeholder="city" name="city" onChange={(e)=>this.change2(e)}/>
                </form>
                <button type="button" onClick={(e)=>this.getWeather(e)}>Get Weather</button>
               <Link to='/' > <MDBBtn size="md"  color='danger' >Go TO Recipe</MDBBtn></Link>
                { loader }
                

           </div>       
         );
    }
}
 
export default Form;
