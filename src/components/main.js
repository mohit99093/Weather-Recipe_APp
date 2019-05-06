import React from "react";
import { MDBNav, MDBRow, MDBCol,MDBInput,MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom'
import './main.css'
export default (props) => (
    
      <MDBRow className="recipe-main">
        <MDBCol className="p-0">
                <MDBNav color="blue-gradient" className="z-depth-1 m-0">
                       <a href="# " className="text-dark align-items-center d-flex ml-md-5 ml-sm-2">
                        <i className="fas fa-utensils fa-3x"></i>
                        </a>
                        <p className="mx-auto nav-text font-weight-bold text-white "  >Search Recipe </p>  
                </MDBNav>
                    <form className="form-inline  justify-content-center  m-0">
                        <MDBInput label="Name of Dish" className="d-block input text-white" size="lg" hint="Dish" onChange={props.change} />
                        <MDBBtn size="md"  onClick={props.submit}>Get Recipe</MDBBtn>
                       <Link to='/weather'> <MDBBtn size="md"  color='danger' >Go TO Weather</MDBBtn></Link>
                        </form>
        </MDBCol>

      </MDBRow>
    

 
);