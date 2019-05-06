import React, { Component } from 'react';
import './main.css'
import Title from './Title/Title'
import Form from './form/Form'
import MapComponent from './Map/map'


class Main extends Component {
         
   
    render() { 
        return ( 
            <div className='main main-body'>
                 <Title />
                 <Form />
                 <MapComponent city='junagadh' country='india'/>
            </div>
         );
    }
}
 
export default Main;