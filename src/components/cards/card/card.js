import React, { Component } from 'react';
import './card.css'
import { Link } from 'react-router-dom'
import { MDBBtn } from 'mdbreact'
class Card extends Component {
    
    render() { 
        let newprops = this.props.location.state
        return ( 
            <div className='container font-weight-bold text-white'>
                    <img src={newprops.url} alt="recipe img" className="img-fluid z-depth-5  mt-3"/>
                    <h3 className='title'>{newprops.title}</h3>
                    <div className="d-flex">
                        <div> 
                            <h5 className='pub'>Publisher: {newprops.publisher}</h5>
                            <h6 className='url'>Url: <a className="text-danger" href="/"> {newprops.publisher_url} </a></h6>
                        </div>
                        <Link to='/' className=" align-self-center ml-auto">  <MDBBtn size="sm" className="bt" outline > Home</MDBBtn></Link>
                    </div>
             </div>   
         );
    }
}
 
export default Card;