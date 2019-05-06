import React, { Component } from 'react';
import './cards.css'
import { Link } from 'react-router-dom'
import {  MDBCard, MDBCardBody,MDBBtn, MDBCardText, MDBCol,MDBRow } from 'mdbreact';


class Cards extends Component {
            shouldComponentUpdate(){
                   
                  return  this.props.recipes.length === 0 ? false :true
            }

    render() { 
        
        let Allcard  
       Allcard =   this.props.recipes.map(recipe =>{
            return  ( <MDBCol lg="3" sm="12" >
               <MDBCard className="my-5 z-depth-3 card" >
                   <img  src={recipe.image_url} style={{height:300}} className="img-top"  alt="recipe-img"/>
                
                 <MDBCardBody>
                   <MDBCardText>{recipe.title}</MDBCardText>
                   <Link to={{
                            pathname:`/recipe/${recipe.recipe_id}`,
                            state :{
                            url :recipe.image_url,
                            publisher : recipe.publisher,
                            title:recipe.title,
                            publisher_url : recipe.publisher_url    
                            }

                     }}> <MDBBtn size='sm' outline>
                        View Recipe 
                   </MDBBtn>
                   </Link>
                 </MDBCardBody>
               </MDBCard>
             </MDBCol>)
           })
        return (                 
                <MDBRow>
                    {Allcard}
                </MDBRow>
         );
    }
}
 
export default Cards;