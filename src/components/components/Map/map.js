import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './map.css'
const MapComponent = (props) => {

      
    return ( 
    
        <Map  google={props.google} initialCenter={{
            lat:23.215635,
            lng: 72.636940
          }}
          zoom={14}
         >
      </Map>
    
     );
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyBpAjGre_KUqjXdQn80NuFJG4YlS0RGdw0')
  })(MapComponent)
